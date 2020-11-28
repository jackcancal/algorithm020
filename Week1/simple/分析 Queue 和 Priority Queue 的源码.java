package Week1.simple;

import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

class Week1Simple2 {

    public static void main(String[] args) {
        // 队列
        Queue<String> queue = new LinkedList<>();
        //添加元素
        queue.add("a"); // 添加失败会抛出异常
        queue.offer("b"); // 添加失败会返回null
        System.out.println(queue);
        //删除元素
        queue.remove(); // 当队列中没有元素时会抛异常
        queue.poll(); // 当队列中没有元素时返回null
        System.out.println(queue.poll());
        System.out.println(queue);

        // queue.add("1");
        // queue.add("2");
        // 查看头部元素

        // System.out.println(queue.element()); // 当队列中没有元素时会抛异常
        System.out.println(queue.peek()); // 当队列中没有元素时返回null

        // 优先队列 方法同上 在插入和取出时会将最小的元素放到头部
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.offer(10);
        System.out.println(priorityQueue);
        priorityQueue.offer(15);
        System.out.println(priorityQueue);
        priorityQueue.offer(30);
        System.out.println(priorityQueue);
        priorityQueue.offer(20);
        System.out.println(priorityQueue);
        priorityQueue.offer(5);
        System.out.println(priorityQueue);
        priorityQueue.poll();
        System.out.println(priorityQueue);
        priorityQueue.poll();
        System.out.println(priorityQueue);
        priorityQueue.poll();
        System.out.println(priorityQueue);
        priorityQueue.poll();
        System.out.println(priorityQueue);
        priorityQueue.poll();
        System.out.println(priorityQueue);
        priorityQueue.poll();
        System.out.println(priorityQueue);
    }
}