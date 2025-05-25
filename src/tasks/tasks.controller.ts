import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Controller('tasks')
export class TasksController {
    constructor (private readonly tasksService:TasksService) {}
    
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body(ValidationPipe) createTaskDto:CreateTaskDto){
        return this.tasksService.createTask(createTaskDto);
    }

    @Get(':id')
    getTaskById(@Param('id',ParseIntPipe) id:number){
        return this.tasksService.getTaskById(id);
    }


    @Delete(':id')
    deleteTask(@Param('id',ParseIntPipe) id:number){
        return this.tasksService.deleteTask(id);
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) updateTaskDto:UpdateTaskDto){
        return this.tasksService.updateTask(id,updateTaskDto)
    }

}
