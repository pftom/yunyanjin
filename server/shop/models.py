from django.db import models


class Product(models.Model):

    name = models.CharField(max_length=20, db_index=True, verbose_name='名称')
    image = models.ImageField(upload_to='products/', blank=True, verbose_name='照片')
    description = models.TextField(blank=True, verbose_name='简介')
    info = models.TextField(blank=True, verbose_name='详细信息')
    created = models.DateTimeField(auto_now_add=True, verbose_name='上架时间')

    class Meta:
        verbose_name = "商品"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Photo(models.Model):

    product = models.ForeignKey(Product, related_name='photos', verbose_name='商品')
    image = models.ImageField(upload_to='products/', blank=True, verbose_name='照片')

    class Meta:
        verbose_name = "商品照片"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.product.name + '-' + str(self.id)


class Item(models.Model):

    product = models.ForeignKey(Product, related_name='items', verbose_name='商品')
    description = models.CharField(max_length=20, blank=True, verbose_name='项目描述')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='价格')
    unit = models.CharField(max_length=10, verbose_name='单位')
    stock = models.PositiveIntegerField(verbose_name='库存')

    class Meta:
        ordering = ('price',)
        verbose_name = "购买项目"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.product.name + '-' + self.description
