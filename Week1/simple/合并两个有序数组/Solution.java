package 合并两个有序数组;

public class Solution {
    public static void main(String[] args) {

    }
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = nums1.length - 1;
        int j = n - 1;
        int k = m - 1;
        while (i >= 0 && j >= 0){
            if (k < 0 || nums1[k] < nums2[j]){
                nums1[i] = nums2[j];
                i--;
                j--;
                continue;
            }
            nums1[i] = nums1[k];
            i--;
            k--;
        }
    }
}
