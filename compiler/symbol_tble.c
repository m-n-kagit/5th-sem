#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#define max 50 
struct Symbol{
    char name[20] , type[10];
    int addr;
};

struct Symbol symbol_tabel[10]; 
int count=0;
void insert(char name[],char type[]){
    srand(time(0));
    for(int i=0;i<count;i++){
        if(strcmp(symbol_tabel[i].name,name)==0){
            printf("The identifier already exits!");
            return;
        }
    }
    if(count<max){
        strcpy(symbol_tabel[count].name,name);
        strcpy(symbol_tabel[count].type,type);
        symbol_tabel[count].addr = rand()%(10000-0);
        count++;
    }
    else{
        printf("The table is full!");
    }
}

void delete(char name[]){
    int found = -1;
    for (int i = 0; i < count; i++) {
        if (strcmp(symbol_tabel[i].name, name) == 0) {
            found = i;
            break;
        }
    }

    if (found == -1) {
        printf("Identifier '%s' not found!\n", name);
        return;
    }

    // Shift entries to fill the gap
    for (int i = found; i < count - 1; i++) {
        symbol_tabel[i] = symbol_tabel[i + 1];
    }
    count--;
    printf("Deleted: %s\n", name);
}

void display() {
    if (count == 0) {
        printf("Symbol Table is empty!\n");
        return;
    }
    printf("\nSymbol Table:\n");
    printf("%-10s %-10s %-10s\n", "Name", "Type", "Address");
    printf("---------------------------------\n");
    for (int i = 0; i < count; i++) {
        printf("%-10s %-10s %-10d\n", symbol_tabel[i].name, symbol_tabel[i].type, symbol_tabel[i].addr);
    }
}


int main(){
    int choice, address;
    char name[20], type[10];

    while (1) {
        printf("\n---- Symbol Table Menu ----\n");
        printf("1. Insert\n2. Delete\n3. Display\n4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter name: ");
                scanf("%s", name);
                printf("Enter type: ");
                scanf("%s", type);
                printf("Enter address: ");
                insert(name, type);
                break;

            case 2:
                printf("Enter name to delete: ");
                scanf("%s", name);
                delete(name);
                break;

            case 3:
                display();
                break;

            case 4:
                exit(0);

            default:
                printf("Invalid choice!\n");
        }
    }


    return 0;
}
