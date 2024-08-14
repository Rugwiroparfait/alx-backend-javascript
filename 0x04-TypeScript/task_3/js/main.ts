import CRUD from "./crud";
import { RowElement, RowID } from "./interface";

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);