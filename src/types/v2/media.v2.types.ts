export type MediaV2MimeType = 'image/jpeg' | 'video/mp4' | 'video/quicktime' | 'image/gif' | 'image/png' | 'text/plain' | 'image/webp';
export type MediaV2MediaCategory = 'tweet_image' | 'tweet_video' | 'tweet_gif' | 'dm_image' | 'dm_video' | 'dm_gif' | 'subtitle';

export interface MediaV2UploadInitParams {
  command: 'INIT';
  media_type: string;
  total_bytes: number;
  media_category?: MediaV2MediaCategory;
}

export interface MediaV2UploadAppendParams {
  command: 'APPEND';
  media_id: string;
  segment_index: number;
  media: Buffer;
}

export interface MediaV2UploadFinalizeParams {
  command: 'FINALIZE';
  media_id: string;
}

export interface MediaV2ProcessingInfo {
  state: 'pending' | 'in_progress' | 'failed' | 'succeeded';
  check_after_secs?: number;
  error?: {
    code: number;
    message: string;
  };
}

export interface MediaV2UploadResponse {
  data: {
    id: string;
    media_key: string;
    size?: number;
    expires_after_secs: number;
    processing_info?: MediaV2ProcessingInfo;
  };
}