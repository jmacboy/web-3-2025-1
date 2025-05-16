from django.utils.deprecation import MiddlewareMixin


class JWTAuthCookieMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if 'Authorization' not in request.headers and 'access' in request.COOKIES:
            request.META['HTTP_AUTHORIZATION'] = f"Bearer {request.COOKIES['access']}"
