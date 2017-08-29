from django.contrib import admin
from orders.models import Order


class OrderAdmin(admin.ModelAdmin):

    list_display = ('order_id', 'user', 'status', 'destination')
    search_fields = ('order_id', 'user', 'destination')
    list_filter = ('status',)


admin.site.register(Order, OrderAdmin)
