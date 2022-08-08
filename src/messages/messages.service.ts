import {MessagesRepository} from "./messages.repository";

export class MessagesService{
  messagesRepo : MessagesRepository
  constructor() {
    // Service is creating its own dependency
    // not suppose to be done in real apps, use dependecy injection
    this.messagesRepo = new MessagesRepository()
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id)
  }

  async findAll(){
    return this.messagesRepo.findAll()
  }

  async create(content: string) {
    return this.messagesRepo.create(content)
  }



}