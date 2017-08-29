import uuid

from django.db import models
from django.contrib.auth.models import User


class Order(models.Model):

    # Order status
    UNPAID = 'U'
    PAID = 'P'
    DISPATCHED = 'D'
    FINISHED = 'F'

    # Order status choices
    STATUS_CHOICES = (
        (UNPAID, '未支付'),
        (PAID, '已支付'),
        (DISPATCHED, '已发货'),
        (FINISHED, '已完成'),
    )

    order_id = models.UUIDField(primary_key=True,
                                editable=False,
                                verbose_name='订单编号')
    user = models.ForeignKey(User, related_name='orders', verbose_name='用户')
    status = models.CharField(max_length=1,
                              choices=STATUS_CHOICES,
                              verbose_name='状态')
    destination = models.CharField(max_length=100, verbose_name='收货地址')
    phone = models.CharField(max_length=11, verbose_name='联系人电话')

    class Meta:
        verbose_name = "订单"
        verbose_name_plural = verbose_name

    def __str__(self):
        return "订单" + str(self.order_id)


class OrderItem(models.Model):

    order = models.ForeignKey(Order, related_name='items', verbose_name='订单')
    item = models.ForeignKey('shop.item', verbose_name='购买项目')
    quantity = models.PositiveIntegerField(verbose_name='数量')

    class Meta:
        verbose_name = "订单条目"
        verbose_name_plural = verbose_name
