package 旋转数组;
import java.util.Arrays;

/*
执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
内存消耗：39 MB, 在所有 Java 提交中击败了82.53%的用户
* */

public class Solution {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7};
        int k = 3;
        rotate(nums, k);
    }
    public static void rotate(int[] nums, int k) {
        int _k = k % nums.length;
        if (_k == 0) return;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, _k - 1);
        reverse(nums, _k, nums.length - 1);
        System.out.println(Arrays.toString(nums));
    }
    public static void reverse(int[] nums, int start, int end){
        while (start < end){
            int temp = nums[end];
            nums[end] = nums[start];
            nums[start] = temp;
            start++;
            end--;
        }
    }
}
