import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: {
        ...createEmployeeDto,
        joiningDate: new Date(createEmployeeDto.joiningDate),
      },
    });
  }

  findAll() {
    return this.prisma.employee.findMany({
      include: {
        tenant: true,
      },
    });
  }

  findOne(id: string) {
  return this.prisma.employee.findUnique({
    where: { id },
    include: {
      tenant: true,
    },
  });
}

update(id: string, dto: UpdateEmployeeDto) {
  return this.prisma.employee.update({
    where: { id },
    data: {
      ...dto,
      joiningDate: dto.joiningDate
        ? new Date(dto.joiningDate)
        : undefined,
    },
  });
}

remove(id: string) {
  return this.prisma.employee.delete({
    where: {
      id,
    },
  });
}
}