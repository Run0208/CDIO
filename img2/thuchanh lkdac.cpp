#include <iostream>
using namespace std;
#define Max 10

// Cau 1
struct QueueMang {
	int mang[Max];
	int l;
	int r;
};

void khoiTaoMang(QueueMang &queue) {
	queue.l = -1;
	queue.r = 0;
}

bool isEmptyMang(QueueMang queue) {
	return queue.l < queue.r;
}

bool isFullMang(QueueMang queue) {
	return queue.l == Max-1;
}

void themMang(QueueMang &queue, int n) {
	if(!isFullMang(queue)) {
		queue.mang[++queue.l] = n;	
	}
}

int layMang(QueueMang &queue) {
	if(!isEmptyMang(queue)) {
		return queue.mang[queue.r++];
	}
}

// Cau 2
struct NodeLkDon {
	int data;
	NodeLkDon *Next;
};

typedef NodeLkDon *QueueLkDon;

QueueLkDon createNodeLkDon(int data) {
	QueueLkDon p = new NodeLkDon;
	p->data = data;
	return p;
}

void khoiTaoQueueLkDon(QueueLkDon &queueLkDon) {
	queueLkDon = NULL;
}

bool isEmptyLkDon(QueueLkDon queueLkDon) {
	return queueLkDon == NULL;
} 

void themLkDon(QueueLkDon &queueLkDon, int data) {
	QueueLkDon p = createNodeLkDon(data);
	p->Next = queueLkDon;
	queueLkDon = p;
}

int layLkDon(QueueLkDon &queueLkDon) {
	if(!isEmptyLkDon(queueLkDon)) {
		if(queueLkDon->Next == NULL) {
			int data = queueLkDon->data;
			queueLkDon = NULL;	
			return data;
		}
		else {
			QueueLkDon i,p;
			for(i=queueLkDon; i->Next != NULL; i = i->Next) {
				p = i;
			}
			p->Next = NULL;
			int data = i->data;
			delete(i);
			return data;	
		}
	}
}

// Cau 3
struct NodeLkDoi {
	int data;
	NodeLkDoi *Next;
	NodeLkDoi *Prev;
};

typedef NodeLkDoi *QueueLkDoi;

QueueLkDoi createNodeLkDoi(int data) {
	QueueLkDoi p = new NodeLkDoi;
	p->data = data;
	p->Next = NULL;
	p->Prev = NULL;
	return p;
}

void khoiTaoQueueLkDoi(QueueLkDoi &queue) {
	queue = NULL;
}

bool isEmptyLkDoi(QueueLkDoi queue) {
	return queue == NULL;
} 

void themLkDoi(QueueLkDoi &queue, int data) {
	QueueLkDoi p = createNodeLkDoi(data);
	if(queue == NULL) {
		queue = p;
	}else {
		p->Next = queue;
		queue->Prev = p;
		queue = p;	
	}
}

int layLkDoi(QueueLkDoi &queue) {
	if(!isEmptyLkDoi(queue)) {
		int data;
		if(queue->Next == NULL) {
			data = queue->data;
			queue = NULL;
		}
		else {
			QueueLkDoi i;
			for(i=queue; i->Next != NULL; i = i->Next);
			data = i->data;
			i->Prev->Next = NULL;
			delete(i);
		}
		return data;	
	}
}

int main() {
	// Cau 1
//	QueueMang quequeMang;
//	khoiTaoMang(quequeMang);
//	themMang(quequeMang, 1);
//	themMang(quequeMang, 2);
//	themMang(quequeMang, 3);
//	while(!isEmptyMang(quequeMang)) {
//		cout<<layMang(quequeMang)<<"\n";
//	}
//	cout<<"Het";

	// Cau 2
//	QueueLkDon queue;
//	khoiTaoQueueLkDon(queue);
//	themLkDon(queue, 1);
//	themLkDon(queue, 2);
//	themLkDon(queue, 3);
////	cout<<layLkDon(queue)<<"\n";
//	while(!isEmptyLkDon(queue)) {
//		cout<<layLkDon(queue)<<"\n";
//	}
////	for(QueueLkDon i=queue; i != NULL; i = i->Next) cout<<i->data<<"\n";

	// Cau 3
//	QueueLkDoi queue;
//	khoiTaoQueueLkDoi(queue);
//	themLkDoi(queue, 1);
//	themLkDoi(queue, 2);
//	themLkDoi(queue, 3);
//	while(!isEmptyLkDoi(queue)) cout<<layLkDoi(queue)<<"\n";
}
