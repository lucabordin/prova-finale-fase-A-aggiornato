import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { ClienteEntity } from './entities/clienti.entity';
import { Repository } from 'typeorm';
import { LoginClientiDto } from './dto/login-clienti.dto';
import { JwtService } from '@nestjs/jwt';
export declare class ClientiService {
    private clientiRepository;
    private readonly jwtService;
    constructor(clientiRepository: Repository<ClienteEntity>, jwtService: JwtService);
    create(createClientiDto: CreateClientiDto): Promise<boolean | never>;
    login(loginClientiDto: LoginClientiDto): Promise<false | {
        access_token: string;
    }>;
    findOne(id: string): Promise<UpdateClientiDto>;
}
