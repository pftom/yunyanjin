from django.conf.urls import url

from orders import views

urlpatterns = [
    url(
        r'^$',
        views.OrderListView.as_view(),
        name='order-list'
    ),
    url(
        r'^new$',
        views.NewOrderView.as_view(),
        name='new-order'
    ),
    url(
        r'^pay$',
        views.PayOrderView.as_view(),
        name='pay'
    ),
    url(
        r'^cancel$',
        views.CancelOrderView.as_view(),
        name='cancel'
    ),
    url(
        r'^finish$',
        views.FinishOrderView.as_view(),
        name='finish'
    ),
]
