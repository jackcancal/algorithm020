package 接雨水;
/*
执行用时：1 ms, 在所有 Java 提交中击败了99.98%的用户
内存消耗：38.2 MB, 在所有 Java 提交中击败了76.59%的用户
* */
class Solution {
    public static void main(String[] args) {
        int[] h = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println(trap(h));
    }
    public static int trap(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int sum = 0;
        while (left < right){
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            if (leftMax <= rightMax){
                sum += leftMax - height[left++];
            }else {
                sum += rightMax - height[right--];
            }
        }
        return sum;
    }
}