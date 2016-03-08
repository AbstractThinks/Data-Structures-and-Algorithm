#include <stdio.h>




typedef int elemType;
typedef struct Node{
	elemType element;
	Node *next;
} pNode;

void initList(pNode *p) {
	p = NULL;
	printf("init is success\n");
}

pNode *createList() {
	Node *p1, *p2, *p;
	p1 = p2 = p = (pNode *)malloc(sizeof(pNode));
	memset(p1, 0, sizeof(pNode));
	p1->next = NULL;
	while (p1->element > 0) {
		if (NULL == p) {
			p = p1;
		} else {
			 p2->next = p1;
		}

		p2 = p1;

		p1 = (Node *)malloc(sizeof(Node));
		memset(p1, 0, sizeof(Node));

		p1->next = NULL;
	}
	return p;
}

void printList(Node *p) {
	if (NULL == p) {
		printf("link is null\n");
	} else {
		while (NULL != p) {
			printf("%d\t", p->element);
			p = p->next;
		}
		
	}
	printf("\n");
}

int clearList (Node *p) {
	Node *pNext;
	while (NULL != p) {
		pNext = p->next;
		free(p);
		p = pNext;
	}
	return 1;
}

int sizeList(Node *p) {
	int i = 0;
	while (NULL != p) {
		i++;
		p = p->next;
	}
	return i;
}

int insertHeadList(Node **p, elemType elem) {
	if (NULL == *p) {
		printf("linkList is null \n");
		return 0;
	}
	if (elem < 1) {
		printf("input value is wrong\n");
		return 0;
	}

	Node *pHead, *pLast;
	pLast = *p;

	pHead = (Node *)malloc(sizeof(Node));
	memset(pHead, 0, sizeof(Node));
	pHead->element = elem;
	pHead->next = pLast;
	*pNode = pHead;
	return 1;

}
void main() {
	
}
