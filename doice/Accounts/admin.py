from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account

class AccountAdmin(admin.ModelAdmin):
    search_fields = ['nickname']
    

admin.site.register(Account, AccountAdmin)