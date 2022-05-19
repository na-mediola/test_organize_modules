abstract class Info {
	name: string;
	type: string;

	constructor(name: string, type: string) {
		this.name = name;
		this.type = type;
	}

	getNameAndType(): string {
		return `the adad name is : ${this.name} and the type is ${this.type}`;
	}
}

export default Info;
