import { budgetItem } from './budget-item.model';

export interface UpdateBudget {
    old: budgetItem;
    new: budgetItem;
}