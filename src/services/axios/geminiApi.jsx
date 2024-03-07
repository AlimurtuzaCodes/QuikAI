import conf from '../../utils/config';
import axiosInstance from './axiosInstance';

export const generateText = async params => {
  try {
    const response = await axiosInstance.post(
      `/v1beta/models/gemini-pro:generateContent?key=${conf.geminiApiKey}`,
      JSON.stringify(params),
    );
    return response;
  } catch (error) {
    throw error;
  }
};
