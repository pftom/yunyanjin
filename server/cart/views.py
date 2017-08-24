from rest_framework import generics

from cart.models import Cart, CartItem
from cart.serializers import CartItemSerializer, CartItemEditSerializer


class ItemListView(generics.ListAPIView):

    serializer_class = CartItemSerializer

    def get_queryset(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart.items.all()


class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):

    queryset = CartItem.objects.all()
    serializer_class = CartItemEditSerializer
