# Generated by Django 2.1 on 2018-09-03 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parcours_imi', '0008_auto_20180903_1157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='semester',
            field=models.CharField(max_length=20, verbose_name='Période'),
        ),
    ]
