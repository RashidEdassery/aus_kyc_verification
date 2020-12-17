export interface ApiResponseType {
  verifyDocumentResult?: {
    type: string;
  };
  verificationRequestNumber?: number;
  verificationResultCode: string;
}

export interface ResponseType {
  success: boolean;
  message: string;
  error?: string;
}
