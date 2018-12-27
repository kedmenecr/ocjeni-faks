/**
 * Service used for uniform response format.
 */
class ResponseService {

    formatResponseData(data) {
        return {
            success: true,
            data: data
        };
    }

    formatResponseError(error) {
        return {
            success: false,
            error: error
        }
    }

}

module.exports = new ResponseService();