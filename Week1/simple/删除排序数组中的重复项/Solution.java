package 删除排序数组中的重复项;
/*
执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
内存消耗：40.5 MB, 在所有 Java 提交中击败了62.35%的用户
* */
class Solution {
    public static void main(String[] args) {
//        int[] nums = {0,0,1};
        int[] nums = {0,0,1,1,1,2,2,3,3,4};
        System.out.println(removeDuplicates(nums));
    }
    public static int removeDuplicates(int[] nums) {
        int i = 0, j = 1;
        while (j < nums.length){
            if (nums[i] != nums[j]) nums[++i] = nums[j];
            j++;
        }
        return ++i;
    }
}