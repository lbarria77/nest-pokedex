import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {

    @IsInt({ message: 'El número debe ser un entero' })
    @IsPositive({ message: 'El número debe ser positivo' })
    @Min(1, { message: 'El número no puede ser menor a 1' })
    no: number;

    @IsString({ message: 'El nombre debe ser un string' })
    @MinLength(1, { message: 'El nombre debe ser igual o mayor a 1 caracter' })
    name: string;
}
