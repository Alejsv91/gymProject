export class Gym {
  constructor({
    id,
    legalId,
    name,
    owner,
    phone,
    email,
    isActive,
    activationDate,
  }) {
    this.id = id;
    this.legalId = legalId;
    this.name = name;
    this.owner = owner;
    this.phone = phone;
    this.email = email;
    this.isActive = isActive;
    this.activationDate = activationDate;
  }

  toCreatePayload() {
    return {
      legal_id: this.legalId,
      name: this.name,
      owner: this.owner,
      phone: this.phone,
      email: this.email,
      is_active: this.isActive,
      activation_date: this.activationDate,
    };
  }
}
