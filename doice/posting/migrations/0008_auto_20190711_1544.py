# Generated by Django 2.2.2 on 2019-07-11 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('posting', '0007_auto_20190711_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment_of_posting',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='posting.PostingForm'),
        ),
    ]
