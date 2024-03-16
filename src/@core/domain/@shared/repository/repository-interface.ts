export default interface RepositoryInterface<T> {
    create(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | undefined>;
    delete(id: string): Promise<void>;
}
