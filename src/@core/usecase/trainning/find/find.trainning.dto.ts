import Exercise from "@src/@core/domain/exercise/entity/exercise";

export interface InputFindTrainningDto { 
    id: string;
}

export interface OutputFindCustomerDto {

    name: string;
    isActive: boolean;
    exercises: Exercise[];
}