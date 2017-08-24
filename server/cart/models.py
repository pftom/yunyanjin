from django.db import models
from django.contrib.auth.models import User


class Cart(models.Model):

    user = models.OneToOneField(User, verbose_name='用户')

    class Meta:
        verbose_name = "购物车"
        verbose_name_plural = verbose_name


class CartItem(models.Model):

    cart = models.ForeignKey(Cart, related_name='items', verbose_name='购物车')
    item = models.ForeignKey('shop.item', verbose_name='购买项目')
    quantity = models.PositiveIntegerField(verbose_name='数量')

    class Meta:
        verbose_name = "购物车条目"
        verbose_name_plural = verbose_name
