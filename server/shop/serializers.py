from rest_framework import serializers

from shop.models import Product, Photo, Item


class ProductDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'name', 'image', 'description', 'info')


class ProductPhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = ('id', 'image')


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('id', 'product', 'price', 'description',
                  'unit', 'stock')
