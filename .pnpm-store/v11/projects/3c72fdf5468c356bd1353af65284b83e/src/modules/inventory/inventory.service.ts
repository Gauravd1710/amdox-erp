import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateInventoryItemDto) {
    return this.prisma.inventoryItem.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.inventoryItem.findMany({
      include: {
        tenant: true,
      },
    });
  }
}
