#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int num_productions;
char productions[20][20];
char first_set[20][20] = {0};

void add_to_result(char result[], char val) {
    int k;
    for (k = 0; result[k] != '\0'; k++) {
        if (result[k] == val) {
            return; // avoid duplicates
        }
    }
    result[k] = val;
    result[k + 1] = '\0';
}

void find_first(char c, int result_row) {
    for (int j = 0; j < num_productions; j++) {
        if (productions[j][0] == c) {
            int k = 2; // RHS starts at index 2 (after A=)
            while (productions[j][k] != '\0') {
                char symbol = productions[j][k];
                if (symbol == '#') { // epsilon
                    add_to_result(first_set[result_row], '#');
                    break;
                } else if (!isupper(symbol)) { // terminal
                    add_to_result(first_set[result_row], symbol);
                    break;
                } else { // non-terminal
                    find_first(symbol, result_row);

                    // if FIRST(symbol) contains epsilon, continue to next
                    int has_epsilon = 0;
                    for (int m = 0; m < strlen(first_set[result_row]); m++) {
                        if (first_set[result_row][m] == '#') {
                            has_epsilon = 1;
                            break;
                        }
                    }
                    if (!has_epsilon) break;
                    else k++; // move to next symbol
                }
            }
        }
    }
}

int main() {
    printf("Enter the number of production rules: ");
    scanf("%d", &num_productions);

    printf("Enter %d production rules (e.g., E=TR , T=# for epsilon):\n", num_productions);
    for (int i = 0; i < num_productions; i++) {
        scanf("%s", productions[i]);
    }

    int non_terminal_count = 0;
    char non_terminals[20];

    // Collect unique non-terminals
    for (int i = 0; i < num_productions; i++) {
        int found = 0;
        for (int j = 0; j < non_terminal_count; j++) {
            if (non_terminals[j] == productions[i][0]) {
                found = 1;
                break;
            }
        }
        if (!found) {
            non_terminals[non_terminal_count++] = productions[i][0];
        }
    }

    // Compute FIRST sets
    for (int i = 0; i < non_terminal_count; i++) {
        find_first(non_terminals[i], i);
        printf("FIRST(%c) = { ", non_terminals[i]);
        for (int j = 0; j < strlen(first_set[i]); j++) {
            printf("%c ", first_set[i][j]);
        }
        printf("}\n");
    }

    return 0;
}
