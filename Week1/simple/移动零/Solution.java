/*
执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
内存消耗：38.7 MB, 在所有 Java 提交中击败了78.58%的用户
* */

package 移动零;


public class Solution {
    public static void main(String[] args) {

    }
    public void moveZeroes(int[] nums) {
        int i = 0, j = 1;
        while (j < nums.length){
            if (nums[i] == 0){
                if (nums[j] != 0) {
                    int temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] =temp;
                    i++;
                }
            }else {
                i++;
            }
            j++;
        }
    }
}
