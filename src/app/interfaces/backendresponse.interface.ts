import { FiscalCode } from "./fiscalcode.interface";
import { User } from "./user.interface";

export interface BackendResponse{
	message: string|User|FiscalCode[];
	check: boolean;
}
