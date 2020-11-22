package 设计循环双端队列;
/*
执行用时：6 ms, 在所有 Java 提交中击败了99.84%的用户
内存消耗：38.9 MB, 在所有 Java 提交中击败了93.29%的用户
* */
public class MyCircularDeque {
    public static void main(String[] args) {
    }
    private final int[] elements;
    private int size;

    public MyCircularDeque(int k) {
        elements = new int[k];
    }

    public boolean insertFront(int value) {
        if(isFull()) return false;
        if (size - 1 + 1 >= 0) System.arraycopy(elements, 0, elements, 1, size - 1 + 1);
        elements[0] = value;
        size++;
        return true;
    }

    public boolean insertLast(int value) {
        if(isFull()) return false;
        elements[size] = value;
        size++;
        return true;
    }

    public boolean deleteFront() {
        if(isEmpty()) return false;
        elements[0] = 0;
        if (size - 1 >= 0) System.arraycopy(elements, 1, elements, 0, size - 1);
        size--;
        return true;
    }

    public boolean deleteLast() {
        if(isEmpty()) return false;
        elements[size-1] = 0;
        size--;
        return true;
    }

    public int getFront() {
        return size == 0 ? -1 : elements[0];
    }

    public int getRear() {
        return size == 0 ? -1 : elements[size-1];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == elements.length;
    }
}
