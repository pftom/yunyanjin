from rest_framework import serializers

from cart.models import CartItem
from shop.serializers import ItemSerializer


class CartItemSerializer(serializers.ModelSerializer):

    item = ItemSerializer()

    class Meta:
        model = CartItem
        fields = ('item', 'quantity')
        read_only_field = ('item',)


class CartItemEditSerializer(serializers.ModelSerializer):

    class Meta:
        model = CartItem
        fields = ('quantity',)
