from django.conf.urls import url

from shop import views

urlpatterns = [
    url(
        r'^products/(?P<pk>\d+)/$',
        views.ProductDetailView.as_view(),
        name='product-detail'
    ),
    url(
        r'^products/(?P<pk>\d+)/photos/$',
        views.ProductPhotosView.as_view(),
        name='product-photos'
    ),
    url(
        r'^products/(?P<pk>\d+)/items/$',
        views.ProductItemsView.as_view(),
        name='product-items'
    ),
    url(
        r'^add-to-cart$',
        views.AddToCartView.as_view(),
        name='add-to-cart'
    ),
]
