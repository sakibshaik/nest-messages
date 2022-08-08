import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import {MessagesService} from "./messages.service";

@Controller('messages')
export class MessagesController {
  MessagesService : MessagesService

  constructor() {
    // Service is creating its own dependency
    // not suppose to be done in real apps, use dependecy injection
    this.MessagesService = new MessagesService()
  }

  @Get()
  listMessages() {
    return this.MessagesService.findAll()
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.MessagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.MessagesService.findOne(id);

    if(!message){
      throw new NotFoundException('message not found')
    }
    return message
  }
}
