import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

const YoutubeState = Record({
    error: false,
    channel: undefined,
    details: undefined,
    videos: [],
    comments: undefined,
});

const initState = new YoutubeState();

export const fetchChannelStart = createAction('youtube/fetch-channel-start');
export const fetchChannelSuccess = createAction(
    'youtube/fetch-channel-success',
);
export const fetchChannelError = createAction('youtube/fetch-channel-error');

export const fetchVideosStart = createAction('youtube/fetch-videos-start');
export const fetchVideosSuccess = createAction('youtube/fetch-videos-success');
export const fetchVideosError = createAction('youtube/fetch-videos-error');

export const fetchTokenStart = createAction('youtube/fetch-token-start');
export const fetchTokenSuccess = createAction('youtube/fetch-token-success');
export const fetchTokenError = createAction('youtube/fetch-token-error');

export const fetchAllVideos = createAction('youtube/fetch-all-videos');

export const fetchVideoStart = createAction('youtube/fetch-video-stat-start');
export const fetchVideoSuccess = createAction(
    'youtube/fetch-video-stat-success',
);
export const fetchVideoError = createAction('youtube/fetch-video-stat-error');

export const fetchCommentsStart = createAction('youtube/fetch-comments-start');
export const fetchCommentsSuccess = createAction(
    'youtube/fetch-comments-success',
);
export const fetchCommentsError = createAction('youtube/fetch-comments-error');

export const fetchCommentsByTokenStart = createAction(
    'youtube/fetch-comments-by-token-start',
);
export const fetchCommentsByTokenSuccess = createAction(
    'youtube/fetch-comments-by-token-success',
);
export const fetchCommentsByTokenError = createAction(
    'youtube/fetch-comments-by-token-error',
);

export default createReducer(
    {
        [fetchChannelStart]: (state, payload) => state.set('error', false),
        [fetchChannelSuccess]: (state, payload) =>
            state.set('channel', payload).set('error', false),
        [fetchChannelError]: (state, payload) => state.set('error', payload),

        [fetchVideosStart]: (state, payload) => state.set('error', false),
        [fetchVideosSuccess]: (state, payload) =>
            state.set('videos', payload).set('error', false),
        [fetchVideosError]: (state, payload) => state.set('error', payload),

        [fetchTokenStart]: (state, payload) => state.set('error', false),
        [fetchTokenSuccess]: (state, payload) =>
            state.set('videos', payload).set('error', false),
        [fetchTokenError]: (state, payload) => state.set('error', payload),

        [fetchVideoStart]: (state, payload) => state.set('error', false),
        [fetchVideoSuccess]: (state, payload) =>
            state.set('details', payload).set('error', false),
        [fetchVideoError]: (state, payload) => state.set('error', payload),

        [fetchAllVideos]: (state, payload) =>
            state.set('videos', payload).set('error', false).delete('channel'),

        [fetchCommentsStart]: (state, payload) => state.set('error', false),
        [fetchCommentsSuccess]: (state, payload) =>
            state.set('comments', payload).set('error', false),
        [fetchCommentsError]: (state, payload) => state.set('error', payload),

        [fetchCommentsByTokenStart]: (state, payload) =>
            state.set('error', false),
        [fetchCommentsByTokenSuccess]: (state, payload) =>
            state.set('comments', payload).set('error', false),
        [fetchCommentsByTokenError]: (state, payload) =>
            state.set('error', payload),
    },
    initState,
);
