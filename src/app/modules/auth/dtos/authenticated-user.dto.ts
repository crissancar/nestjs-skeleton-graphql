import { UserAudiences } from '../../shared/enums/user-audiences.enum';
import { UserEntity } from '../../users/persistence/user.entity';

export class AuthenticatedUser {
	readonly id: string;

	readonly name: string;

	readonly email: string;

	readonly audiences: Array<UserAudiences>;

	constructor(id: string, name: string, email: string, audiences: Array<UserAudiences>) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.audiences = audiences;
	}

	static create(user: UserEntity): AuthenticatedUser {
		const { id, name, email, audiences } = user;

		return new AuthenticatedUser(id, name, email, audiences);
	}
}
