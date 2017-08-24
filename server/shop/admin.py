from django.contrib import admin
from django.contrib.auth.models import Group

from rest_framework.authtoken.models import Token

from shop.models import Product, Photo, Item


class ProductAdmin(admin.ModelAdmin):

    list_display = ('name', 'created')


class ItemAdmin(admin.ModelAdmin):

    list_display = ('product', 'description', 'price', 'unit', 'stock')


admin.site.register(Product, ProductAdmin)
admin.site.register(Photo)
admin.site.register(Item, ItemAdmin)

# Admin site settings
admin.site.site_header = '云梦盐津 • 后台管理'
admin.site.site_title = '云梦盐津'
admin.site.unregister(Token)
admin.site.unregister(Group)
