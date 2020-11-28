package Week1.simple.两数之和;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
/*
执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
内存消耗：38.4 MB, 在所有 Java 提交中击败了91.39%的用户
* */
public class Solution {

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(nums, target)));
    }

    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(map.containsKey(target - nums[i])) {
                return new int[] { map.get(target-nums[i]), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {-1,-1};
    }
}
