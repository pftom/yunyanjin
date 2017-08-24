from rest_framework.test import APITestCase, APIClient

from shop.models import Product, Photo, Item

class ShopTests(APITestCase):

    def setUp(self):
        self.product = Product.objects.create(
            name='test',
            description='test',
            info='test'
        )
        self.item1 = Item.objects.create(
            product=self.product,
            price=100.00,
            unit='test',
            stock=100
        )
        self.item2 = Item.objects.create(
            product=self.product,
            price=150.00,
            unit='test',
            stock=100
        )

    def test_
