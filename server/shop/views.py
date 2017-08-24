from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from shop.models import Product, Photo, Item
from shop.serializers import (ProductDetailSerializer,
                              ProductPhotoSerializer,
                              ItemSerializer)
from cart.models import Cart, CartItem


class ProductDetailView(generics.RetrieveAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer


class ProductPhotosView(generics.ListAPIView):

    serializer_class = ProductPhotoSerializer

    def get_queryset(self):
        product = Product.objects.get(id=self.kwargs['pk'])
        return product.photos.all()


class ProductItemsView(generics.ListAPIView):

    serializer_class = ItemSerializer

    def get_queryset(self):
        product = Product.objects.get(id=self.kwargs['pk'])
        return product.items.all()


class AddToCartView(APIView):

    def post(self, request):
        item = Item.objects.get(id=request.data['item'])
        cart, created = Cart.objects.get_or_create(user=request.user)
        CartItem.objects.create(
            cart=cart,
            item=item,
            quantity=request.data['quantity']
        )

        return Response(status=status.HTTP_201_CREATED)
