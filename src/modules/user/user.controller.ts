import { Body, Controller, Get, Param, Put, UnsupportedMediaTypeException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './interfaces/updated';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('getAll')
    getAll() {
        return this.userService.getall()
    }

    @Put(":id/update")
    @UseInterceptors(FileInterceptor('avatar', {
        storage: diskStorage({
            destination: "./uploads/avatar",
            filename: (req, file, cb) => {
                let posterName = file.originalname
                cb(null, posterName)
            }
        }),
        fileFilter: (req, file, callback) => {
            let allowed: string[] = ['image/jpeg', 'image/jpg', 'image/png']
            if (!allowed.includes(file.mimetype)) {
                callback(new UnsupportedMediaTypeException("File tpe must be .jpg | .jpeg | .png "), false)

            }
            callback(null, true)
        }
    }))
    UpdateUser(@Body() payload: UpdateUserDto, @Param("id") id: string, @UploadedFile() avatar: Express.Multer.File) {
        return this.userService.update(id, payload, avatar)

    }
}
