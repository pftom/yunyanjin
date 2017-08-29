import uuid

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from orders.models import Order, OrderItem
from orders.serializers import OrderSerializer

import errors


class NewOrderView(APIView):
    """Create a new order with all items in the cart."""

    def post(self, request):
        # Check if user's cart is empty
        if request.user.cart.items.count() == 0:
            return Response(errors.EMPTY_CART,
                            status=status.HTTP_400_BAD_REQUEST)

        order = Order.objects.create(
            order_id=uuid.uuid4().hex,
            user=request.user,
            status=Order.UNPAID,
            destination=request.data['destination'],
            phone=request.data['phone']
        )

        # Add all items in cart to the order
        for cart_item in request.user.cart.items.all():
            OrderItem.objects.create(
                order=order,
                item=cart_item.item,
                quantity=cart_item.quantity
            )

        return Response({'order_id': order.order_id},
                        status=status.HTTP_201_CREATED)


class OrderListView(generics.ListAPIView):
    """List all orders of all status."""

    serializer_class = OrderSerializer

    def get_queryset(self):
        return self.request.user.orders.all()


class PayOrderView(APIView):
    """Get an unpaid order paid."""

    def post(self, request):
        order = Order.objects.get(id=request.data['order_id'])

        # Handle orders of wrong status
        if order.status != Order.UNPAID:
            return Response(errors.WRONG_ORDER_STATUS,
                            status=status.HTTP_400_BAD_REQUEST)

        order.status = Order.PAID
        order.save()

        return Reponse(status=status.HTTP_200_OK)


class CancelOrderView(APIView):
    """Cancel an unpaid order."""

    def post(self, request):
        order = Order.objects.get(id=request.data['order_id'])

        # Handle orders of wrong status
        if order.status != Order.UNPAID:
            return Response(errors.WRONG_ORDER_STATUS,
                            status=status.HTTP_400_BAD_REQUEST)

        order.delete()

        return Reponse(status=status.HTTP_200_OK)


class FinishOrderView(APIView):
    """Finish a paid order."""

    def post(self, request):
        order = Order.objects.get(id=request.data['order_id'])

        # Handle orders of wrong status
        if order.status != Order.DISPATCHED and order.status != Order.PAID:
            return Response(errors.WRONG_ORDER_STATUS,
                            status=status.HTTP_400_BAD_REQUEST)

        order.status = Order.FINISHED
        order.save()

        return Reponse(status=status.HTTP_200_OK)
