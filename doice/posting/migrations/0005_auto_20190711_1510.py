# Generated by Django 2.2.2 on 2019-07-11 15:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('posting', '0004_auto_20190710_1615'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='comment_of_posting',
        ),
        migrations.AddField(
            model_name='postingform',
            name='posting_comments',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='posting.Comment'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='comment_author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='postingform',
            name='posting_author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
