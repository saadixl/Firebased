import { TEST_API_URL } from '../constants';
import useAsyncDataFetcher from './useAsyncDataFetcher';

export default function useTestHook() {
    return useAsyncDataFetcher(TEST_API_URL);
}