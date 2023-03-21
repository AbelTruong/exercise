window.theme = window.theme || {};
window.theme.yta_widgets = window.theme.yta_widgets || [
  {
    id: "yta-cqohm4zr9nl-1623059382659",
    name: "widget-1623059382659",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel URL", "Video IDs"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {
            label: "Blue",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#005b96",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b3cde0",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b3cde0",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b3cde0",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#03396c",
                },
              },
            },
          },
          {
            label: "Dark Purple",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#600840",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#d7606a",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#c37979",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#c37979",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#480838",
                },
              },
            },
          },
          {
            label: "Dark",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#333333",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#a0a0a0",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#747474",
                },
                video_description: {
                  label: "Video Description",
                  value: "#c8c8c8",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#747474",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#121212",
                },
              },
            },
          },
          {
            label: "Facebook",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#8b9dc3",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#dfe3ee",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#dfe3ee",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#dfe3ee",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#3b5998",
                },
              },
            },
          },
          {
            label: "Gold coffee",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#5d2c04",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#9f7157",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#9f7157",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#9f7157",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#3d1e11",
                },
              },
            },
          },
          {
            label: "Green",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#49a748",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#8ada89",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#8ada89",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#8ada89",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#034024",
                },
              },
            },
          },
          {
            label: "Mountain Moments",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#1e646e",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b2a59f",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b2a59f",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b2a59f",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#002c2f",
                },
              },
            },
          },
          {
            label: "Orange",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#ffa500",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#121212",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#2c2b2b",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#804a00",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#121212",
                },
                video_date: {
                  label: "Video Date",
                  value: "#804a00",
                },
                video_description: {
                  label: "Video Description",
                  value: "#2c2b2b",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#804a00",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#db8000",
                },
              },
            },
          },
          {
            label: "Pancake",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#607178",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#fbd137",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#fbd1a7",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#fbd1a7",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#353c42",
                },
              },
            },
          },
          {
            label: "Purple",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#703890",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b888b8",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b888b8",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b888b8",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#401060",
                },
              },
            },
          },
          {
            label: "Rose",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#F26b8b",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#fec4c4",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#fec4c4",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#fec4c4",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#e03d56",
                },
              },
            },
          },
          {
            label: "Yellow",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#ffcc51",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#121212",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#2c2b2b",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#e19005",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#121212",
                },
                video_date: {
                  label: "Video Date",
                  value: "#c46116",
                },
                video_description: {
                  label: "Video Description",
                  value: "#2c2b2b",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#c46116",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffb502",
                },
              },
            },
          },
          {
            label: "Custom",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCG-8TGzkP7XhKKxTj261o1w",
        url: "https://www.youtube.com/channel/UCG-8TGzkP7XhKKxTj261o1w",
        title: "ArenaCommerce",
        titleCustom: "",
        description:
          "A place to buy beautiful Themes for your ecommerce website.",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/ytc/AAUvwnj6OgqF4Fgy3d1LVx3A0sOtj7EB4BRR77uTve-1Ww=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.ggpht.com/AiIIMHoN8oamPYSo_0t5lhWd3oJnPu80IjEtVU3wNnHksSMXu48SxDECLUu2T7N0d4-NCGTl",
        imageCustom: "",
        statistics: {
          viewCount: "113",
          subscriberCount: "432",
          videoCount: "113",
        },
      },
      youtube_videos: {
        ids: [
          "5SaKBu1xD4E",
          "QMN5RI-J5nU",
          "JaDZrmBYj6U",
          "U5U48oyadiE",
          "dJ6M_xDrRhg",
          "o7Jok4LCAzc",
          "ROVPAx54-fo",
          "5NUomKveBdQ",
          "LMMcwo5TkMk",
          "2KZPI44BRg8",
          "Xo9Sn2rC9-U",
          "z9iVvt9ocgY",
          "fSWw1s4GbLQ",
          "5jwYM9LKu1w",
          "pJXFts2E9Xw",
          "BvDD91rseNU",
          "wbqK306yjWc",
          "-NEtD3kk6VA",
          "BdP-06qS10E",
          "oMFPkRF4fq8",
        ],
        items: [
          {
            id: "5SaKBu1xD4E",
            statistics: {
              viewCount: "29",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M46S",
            },
            snippet: {
              title: "How to change or hidden Youtube Feed from shop",
              description: "How to change or hidden Youtube Feed from shop",
              publishedAt: "2021-01-16T09:37:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5SaKBu1xD4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QMN5RI-J5nU",
            statistics: {
              viewCount: "12",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M51S",
            },
            snippet: {
              title: "Insert a Youtube Feed into blogs page",
              description: "Insert a Youtube Feed into blogs page",
              publishedAt: "2021-01-16T09:35:57Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QMN5RI-J5nU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "JaDZrmBYj6U",
            statistics: {
              viewCount: "13",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M36S",
            },
            snippet: {
              title: "Insert a Youtube Feed into products page",
              description: "Insert a Youtube Feed into products page",
              publishedAt: "2021-01-16T09:34:46Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/JaDZrmBYj6U/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "U5U48oyadiE",
            statistics: {
              viewCount: "31",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M32S",
            },
            snippet: {
              title: "How to create a Youtube Feed using Google API key",
              description:
                "How to create a Youtube Feed Gallery using Google API key - Shopify App",
              publishedAt: "2021-01-16T09:29:41Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/U5U48oyadiE/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "dJ6M_xDrRhg",
            statistics: {
              viewCount: "34",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M13S",
            },
            snippet: {
              title:
                "How to create a Shopify Youtube Gallery with Youtube Video IDs - without Google API Key",
              description:
                "How to create a Youtube Feed from a Youtube video id - without Google API key",
              publishedAt: "2021-01-16T09:23:38Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/dJ6M_xDrRhg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "o7Jok4LCAzc",
            statistics: {
              viewCount: "101",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT5M58S",
            },
            snippet: {
              title:
                "How to add Filter Groups in Collections Page - Arena Commerce",
              description:
                "The theme we are using is Supply, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-09-24T16:24:40Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/o7Jok4LCAzc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "ROVPAx54-fo",
            statistics: {
              viewCount: "270",
              likeCount: "3",
              dislikeCount: "2",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT13M2S",
            },
            snippet: {
              title:
                "How to config Mega Navigation in Supply Theme - Arena Commerce",
              description:
                "The theme we are using is Supply, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-09-15T14:12:43Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/ROVPAx54-fo/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "5NUomKveBdQ",
            statistics: {
              viewCount: "143",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT9M20S",
            },
            snippet: {
              title: "How to config Product Menu Tab Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-23T15:24:53Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5NUomKveBdQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "LMMcwo5TkMk",
            statistics: {
              viewCount: "88",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT6M7S",
            },
            snippet: {
              title: "How to config Product Menu Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-23T14:41:56Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/LMMcwo5TkMk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "2KZPI44BRg8",
            statistics: {
              viewCount: "76",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT7M26S",
            },
            snippet: {
              title: "How to config Product Lookbook Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-22T15:25:43Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/2KZPI44BRg8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "Xo9Sn2rC9-U",
            statistics: {
              viewCount: "63",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M36S",
            },
            snippet: {
              title: "How to config Product Listing Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-22T15:11:42Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Xo9Sn2rC9-U/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "z9iVvt9ocgY",
            statistics: {
              viewCount: "689",
              likeCount: "3",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT35M59S",
            },
            snippet: {
              title: "How to custom Mega Menu in XStore Theme - Arena Commerce",
              description:
                "This video will show you how to add tags to a product for filter system.\nThe theme we are using is XStore, for more information please contact us :              suppor",
              publishedAt: "2020-05-13T13:52:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/z9iVvt9ocgY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "fSWw1s4GbLQ",
            statistics: {
              viewCount: "107",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT6M41S",
            },
            snippet: {
              title: "How to add Mobile Bar Sections in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-10T15:30:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/fSWw1s4GbLQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "5jwYM9LKu1w",
            statistics: {
              viewCount: "653",
              likeCount: "1",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT13M35S",
            },
            snippet: {
              title: "How To Configure Your Header Section in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-09T18:13:11Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5jwYM9LKu1w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "pJXFts2E9Xw",
            statistics: {
              viewCount: "200",
              likeCount: "1",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT11M6S",
            },
            snippet: {
              title:
                "How to custom product cards - Collection pages & Product Sections in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-09T17:36:05Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/pJXFts2E9Xw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "BvDD91rseNU",
            statistics: {
              viewCount: "180",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT6M4S",
            },
            snippet: {
              title:
                "How to create a collection & customize collection layout section in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-08T18:16:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BvDD91rseNU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "wbqK306yjWc",
            statistics: {
              viewCount: "65",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT7M31S",
            },
            snippet: {
              title: "How to duplicate a collection template in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-08T16:58:26Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/wbqK306yjWc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "-NEtD3kk6VA",
            statistics: {
              viewCount: "125",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT11M49S",
            },
            snippet: {
              title: "How to duplicate a product template - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-08T16:11:16Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/-NEtD3kk6VA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "BdP-06qS10E",
            statistics: {
              viewCount: "163",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT11M8S",
            },
            snippet: {
              title: "How to config Product Grid V2 Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-07T14:06:07Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BdP-06qS10E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "oMFPkRF4fq8",
            statistics: {
              viewCount: "54",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT8M43S",
            },
            snippet: {
              title:
                "How to config Product Grid Group Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don",
              publishedAt: "2020-05-07T13:18:45Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/oMFPkRF4fq8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
      },
      youtube_playlists: {
        items: [
          {
            id: "PLsZwfcHiP6N8xpgcJiMtRS5LdSu3t3wOw",
            snippet: {
              title: "Shopify Youtube Feed - Arenacommerce",
            },
          },
          {
            id: "PLsZwfcHiP6N-htOdWi2VlaRyn6h4gp_J6",
            snippet: {
              title: "Supply User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N_-a6zBgCezaCF2zVCq4T4E",
            snippet: {
              title: "XStore User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-tZB7qDcRCEofdNoJSyISJ",
            snippet: {
              title: "Electro 5 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-lBfCR4EOmc58LfcXxoch5",
            snippet: {
              title: "Chromium User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N9GjfAUWmsLQL-bLzd32J1S",
            snippet: {
              title: "Zeexo User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-uNlyuZwWuts3uw_2K6l3K",
            snippet: {
              title: "ArenaCommerce - General",
            },
          },
          {
            id: "PLsZwfcHiP6N8hQgl0vp-6SeGrLamkBLVH",
            snippet: {
              title: "Handy 4 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N8QndlmGAO1ax6H_f0LieaB",
            snippet: {
              title: "Shopify Themes",
            },
          },
        ],
        selected: -1,
      },
    },
    enabled: true,
    created_at: "2021-06-07T09:49:42.660Z",
    updated_at: 1623059316191,
    deleted_at: "",
    app_plan: "basic",
  },
  {
    id: "yta-tj7bqct14hr-1623060879077",
    name: "widget-1623060879077",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel URL", "Video IDs"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {
            label: "Blue",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#005b96",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b3cde0",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b3cde0",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b3cde0",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#03396c",
                },
              },
            },
          },
          {
            label: "Dark Purple",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#600840",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#d7606a",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#c37979",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#c37979",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#480838",
                },
              },
            },
          },
          {
            label: "Dark",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#333333",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#a0a0a0",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#747474",
                },
                video_description: {
                  label: "Video Description",
                  value: "#c8c8c8",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#747474",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#121212",
                },
              },
            },
          },
          {
            label: "Facebook",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#8b9dc3",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#dfe3ee",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#dfe3ee",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#dfe3ee",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#3b5998",
                },
              },
            },
          },
          {
            label: "Gold coffee",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#5d2c04",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#9f7157",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#9f7157",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#9f7157",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#3d1e11",
                },
              },
            },
          },
          {
            label: "Green",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#49a748",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#8ada89",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#8ada89",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#8ada89",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#034024",
                },
              },
            },
          },
          {
            label: "Mountain Moments",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#1e646e",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b2a59f",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b2a59f",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b2a59f",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#002c2f",
                },
              },
            },
          },
          {
            label: "Orange",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#ffa500",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#121212",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#2c2b2b",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#804a00",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#121212",
                },
                video_date: {
                  label: "Video Date",
                  value: "#804a00",
                },
                video_description: {
                  label: "Video Description",
                  value: "#2c2b2b",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#804a00",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#db8000",
                },
              },
            },
          },
          {
            label: "Pancake",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#607178",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#fbd137",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#fbd1a7",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#fbd1a7",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#353c42",
                },
              },
            },
          },
          {
            label: "Purple",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#703890",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b888b8",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b888b8",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b888b8",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#401060",
                },
              },
            },
          },
          {
            label: "Rose",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#F26b8b",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#fec4c4",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#fec4c4",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#fec4c4",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#e03d56",
                },
              },
            },
          },
          {
            label: "Yellow",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#ffcc51",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#121212",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#2c2b2b",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#e19005",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#121212",
                },
                video_date: {
                  label: "Video Date",
                  value: "#c46116",
                },
                video_description: {
                  label: "Video Description",
                  value: "#2c2b2b",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#c46116",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffb502",
                },
              },
            },
          },
          {
            label: "Custom",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCG-8TGzkP7XhKKxTj261o1w",
        url: "https://www.youtube.com/channel/UCG-8TGzkP7XhKKxTj261o1w",
        title: "ArenaCommerce",
        titleCustom: "",
        description:
          "A place to buy beautiful Themes for your ecommerce website.",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/ytc/AAUvwnj6OgqF4Fgy3d1LVx3A0sOtj7EB4BRR77uTve-1Ww=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.ggpht.com/AiIIMHoN8oamPYSo_0t5lhWd3oJnPu80IjEtVU3wNnHksSMXu48SxDECLUu2T7N0d4-NCGTl",
        imageCustom: "",
        statistics: {
          viewCount: "39674",
          subscriberCount: "377",
          videoCount: "113",
        },
      },
      youtube_videos: {
        ids: [
          "5SaKBu1xD4E",
          "QMN5RI-J5nU",
          "JaDZrmBYj6U",
          "U5U48oyadiE",
          "dJ6M_xDrRhg",
          "o7Jok4LCAzc",
          "ROVPAx54-fo",
          "5NUomKveBdQ",
          "LMMcwo5TkMk",
          "2KZPI44BRg8",
          "Xo9Sn2rC9-U",
          "z9iVvt9ocgY",
          "fSWw1s4GbLQ",
          "5jwYM9LKu1w",
          "pJXFts2E9Xw",
          "BvDD91rseNU",
          "wbqK306yjWc",
          "-NEtD3kk6VA",
          "BdP-06qS10E",
          "oMFPkRF4fq8",
        ],
        items: [
          {
            id: "5SaKBu1xD4E",
            statistics: {
              viewCount: "0",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M46S",
            },
            snippet: {
              title: "How to change or hidden Youtube Feed from shop",
              description: "How to change or hidden Youtube Feed from shop",
              publishedAt: "2021-01-16T09:37:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5SaKBu1xD4E/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "QMN5RI-J5nU",
            statistics: {
              viewCount: "0",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M51S",
            },
            snippet: {
              title: "Insert a Youtube Feed into blogs page",
              description: "Insert a Youtube Feed into blogs page",
              publishedAt: "2021-01-16T09:35:57Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QMN5RI-J5nU/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "JaDZrmBYj6U",
            statistics: {
              viewCount: "0",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M36S",
            },
            snippet: {
              title: "Insert a Youtube Feed into products page",
              description: "Insert a Youtube Feed into products page",
              publishedAt: "2021-01-16T09:34:46Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/JaDZrmBYj6U/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "U5U48oyadiE",
            statistics: {
              viewCount: "2",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M32S",
            },
            snippet: {
              title: "How to create a Youtube Feed using Google API key",
              description:
                "How to create a Youtube Feed Gallery using Google API key - Shopify App",
              publishedAt: "2021-01-16T09:29:41Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/U5U48oyadiE/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "dJ6M_xDrRhg",
            statistics: {
              viewCount: "2",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M13S",
            },
            snippet: {
              title:
                "How to create a Shopify Youtube Gallery with Youtube Video IDs - without Google API Key",
              description:
                "How to create a Youtube Feed from a Youtube video id - without Google API key",
              publishedAt: "2021-01-16T09:23:38Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/dJ6M_xDrRhg/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "o7Jok4LCAzc",
            statistics: {
              viewCount: "53",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT5M58S",
            },
            snippet: {
              title:
                "How to add Filter Groups in Collections Page - Arena Commerce",
              description:
                "The theme we are using is Supply, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-09-24T16:24:40Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/o7Jok4LCAzc/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "ROVPAx54-fo",
            statistics: {
              viewCount: "138",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT13M2S",
            },
            snippet: {
              title:
                "How to config Mega Navigation in Supply Theme - Arena Commerce",
              description:
                "The theme we are using is Supply, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-09-15T14:12:43Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/ROVPAx54-fo/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "5NUomKveBdQ",
            statistics: {
              viewCount: "112",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT9M20S",
            },
            snippet: {
              title: "How to config Product Menu Tab Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-23T15:24:53Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5NUomKveBdQ/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "LMMcwo5TkMk",
            statistics: {
              viewCount: "73",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT6M7S",
            },
            snippet: {
              title: "How to config Product Menu Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-23T14:41:56Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/LMMcwo5TkMk/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "2KZPI44BRg8",
            statistics: {
              viewCount: "60",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT7M26S",
            },
            snippet: {
              title: "How to config Product Lookbook Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-22T15:25:43Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/2KZPI44BRg8/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "Xo9Sn2rC9-U",
            statistics: {
              viewCount: "44",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M36S",
            },
            snippet: {
              title: "How to config Product Listing Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-22T15:11:42Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Xo9Sn2rC9-U/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "z9iVvt9ocgY",
            statistics: {
              viewCount: "328",
              likeCount: "1",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT35M59S",
            },
            snippet: {
              title: "How to custom Mega Menu in XStore Theme - Arena Commerce",
              description:
                "This video will show you how to add tags to a product for filter system.\nThe theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/de...\n-Advanced Custom Field :https://apps.shopify.com/advanced-cus...\n-Mailchimp: https://mailchimp.com/\n-Klaviyo: https://www.klaviyo.com/",
              publishedAt: "2020-05-13T13:52:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/z9iVvt9ocgY/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "fSWw1s4GbLQ",
            statistics: {
              viewCount: "78",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT6M41S",
            },
            snippet: {
              title: "How to add Mobile Bar Sections in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-10T15:30:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/fSWw1s4GbLQ/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "5jwYM9LKu1w",
            statistics: {
              viewCount: "433",
              likeCount: "1",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT13M35S",
            },
            snippet: {
              title: "How To Configure Your Header Section in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-09T18:13:11Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5jwYM9LKu1w/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "pJXFts2E9Xw",
            statistics: {
              viewCount: "120",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT11M6S",
            },
            snippet: {
              title:
                "How to custom product cards - Collection pages & Product Sections in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n- Arena Help : https://help.arenacommerce.com/\n- ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n- Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n- Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-09T17:36:05Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/pJXFts2E9Xw/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "BvDD91rseNU",
            statistics: {
              viewCount: "131",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT6M4S",
            },
            snippet: {
              title:
                "How to create a collection & customize collection layout section in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-08T18:16:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BvDD91rseNU/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "wbqK306yjWc",
            statistics: {
              viewCount: "45",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT7M31S",
            },
            snippet: {
              title: "How to duplicate a collection template in Xstore",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/de...\n-Advanced Custom Field :https://apps.shopify.com/advanced-cus...\n-Background audio : Diamond Eyes - Flutter [NCS Release] :https://www.youtube.com/watch?v=lEHM9...\n[No Copyright Music] Chill LoFi Hip Hop Beat FREE (Copyright Free) VLOG Music By KaizanBlu :https://www.youtube.com/watch?v=Thb2A...\nFredji - Happy Life (Vlog No Copyright Music) :https://www.youtube.com/watch?v=KzQiR...",
              publishedAt: "2020-05-08T16:58:26Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/wbqK306yjWc/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "-NEtD3kk6VA",
            statistics: {
              viewCount: "83",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT11M49S",
            },
            snippet: {
              title: "How to duplicate a product template - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/de...\n-Advanced Custom Field :https://apps.shopify.com/advanced-cus...\n-Background audio : Diamond Eyes - Flutter [NCS Release] :https://www.youtube.com/watch?v=lEHM9...\n[No Copyright Music] Chill LoFi Hip Hop Beat FREE (Copyright Free) VLOG Music By KaizanBlu :https://www.youtube.com/watch?v=Thb2A...\nFredji - Happy Life (Vlog No Copyright Music) :https://www.youtube.com/watch?v=KzQiR...",
              publishedAt: "2020-05-08T16:11:16Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/-NEtD3kk6VA/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "BdP-06qS10E",
            statistics: {
              viewCount: "109",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT11M8S",
            },
            snippet: {
              title: "How to config Product Grid V2 Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-07T14:06:07Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BdP-06qS10E/hqdefault.jpg",
                },
              },
            },
          },
          {
            id: "oMFPkRF4fq8",
            statistics: {
              viewCount: "46",
              likeCount: "0",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT8M43S",
            },
            snippet: {
              title:
                "How to config Product Grid Group Section - Arena Commerce",
              description:
                "The theme we are using is XStore, for more information please contact us :              support@arenathemes.com\nIf you like this video, please leave a like, if you don't, please comment down below for us to improve video quality. Thank you for watching.\n-Arena Help : https://help.arenacommerce.com/\n-ArenaDashboard :https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n-Advanced Custom Field :https://apps.shopify.com/advanced-custom-field\n-Background audio : https://www.youtube.com/watch?v=mHNVUnQ1Dk0",
              publishedAt: "2020-05-07T13:18:45Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/oMFPkRF4fq8/hqdefault.jpg",
                },
              },
            },
          },
        ],
      },
      youtube_playlists: {
        items: [
          {
            id: "PLsZwfcHiP6N8xpgcJiMtRS5LdSu3t3wOw",
            snippet: {
              title: "Shopify Youtube Feed - Arenacommerce",
            },
          },
          {
            id: "PLsZwfcHiP6N-htOdWi2VlaRyn6h4gp_J6",
            snippet: {
              title: "Supply User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N_-a6zBgCezaCF2zVCq4T4E",
            snippet: {
              title: "XStore User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-tZB7qDcRCEofdNoJSyISJ",
            snippet: {
              title: "Electro 5 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-lBfCR4EOmc58LfcXxoch5",
            snippet: {
              title: "Chromium User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N9GjfAUWmsLQL-bLzd32J1S",
            snippet: {
              title: "Zeexo User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-uNlyuZwWuts3uw_2K6l3K",
            snippet: {
              title: "ArenaCommerce - General",
            },
          },
          {
            id: "PLsZwfcHiP6N8hQgl0vp-6SeGrLamkBLVH",
            snippet: {
              title: "Handy 4 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N8QndlmGAO1ax6H_f0LieaB",
            snippet: {
              title: "Shopify Themes",
            },
          },
        ],
        selected: -1,
      },
    },
    enabled: true,
    created_at: "2021-06-07T10:14:39.078Z",
    updated_at: 1623060829291,
    deleted_at: "",
    app_plan: "basic",
  },
  {
    id: "yta-np3yjjhiwjp-1645432941672",
    name: "Youtube-Feed-1645432941672",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UC2pmfLm7iq6Ov1UwYrWYkZA",
        url: "https://www.youtube.com/channel/UC2pmfLm7iq6Ov1UwYrWYkZA",
        title: "Vevo",
        titleCustom: "",
        description:
          "Vevo on YouTube - Official Music Videos, Live Performances, Interviews and more...",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/ytc/AL5GRJW6KzgWHa__xX959oWdWmbLYHfS3S_U6tom0hAYkn0=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/lpSW96nC3bphvoMwaHQZc2Pjr2_uxJFiNOXb315TzeJR-M5ybokVw4djelx97spNWtfA712F8g",
        imageCustom: "",
        statistics: {
          viewCount: 1527,
          subscriberCount: 20000000,
          videoCount: 1527,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PL9tY0BWXOZFtj9G_Ql_5iZ4KUwJPxOZNb",
            snippet: {
              title: "Kali Uchis 'Red Moon In Venus' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFtKvD0MfBRYKsKGYzybk5xm",
            snippet: {
              title: "Yorke 'ten feet tall' EP",
            },
          },
          {
            id: "PL9tY0BWXOZFsyo2maepK6gsYVExKS_z9m",
            snippet: {
              title: "Passion 'I've Witnessed It (Live)' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFup-XV7bKigogbXBZfYokXL",
            snippet: {
              title: "Nat King Cole 'From The Capitol Vaults (Vol. 3)' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFus5vvdjyu_EiTCgAO1VdnY",
            snippet: {
              title: "Crown Lands 'BBC Live Session' EP",
            },
          },
          {
            id: "PL9tY0BWXOZFtRfP3DMoPGgacKjsiRAPNy",
            snippet: {
              title: "Swurve & Shady Nate 'Respect Game' EP",
            },
          },
          {
            id: "PL9tY0BWXOZFupiFxSnKiDRSKX9y_hntMv",
            snippet: {
              title: "Kristian Bush “52 | This Year” Album",
            },
          },
          {
            id: "PL9tY0BWXOZFu6UoDkxI4lIPdknNdCi7Cs",
            snippet: {
              title: "June Freedom 'Sweet Waters' EP",
            },
          },
          {
            id: "PL9tY0BWXOZFvRxLuVozpsR4PshETQOq2P",
            snippet: {
              title: "Mistah F.A.B. 'March Motion' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFs-ZqPqqsVmczP6XhWflznD",
            snippet: {
              title: "Starcrawler 'Acoustic Sessions' EP",
            },
          },
          {
            id: "PL9tY0BWXOZFsdox9vb0OOWNOGc6dDjEwR",
            snippet: {
              title: "De La Soul Compilation",
            },
          },
          {
            id: "PL9tY0BWXOZFsbjYq2AbwRqqWNJopmnV7V",
            snippet: {
              title: "The War and Treaty 'Lover's Game' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFutHOozxTe8AeIdBRI-O-hv",
            snippet: {
              title: "Jim Jones 'Back In My Prime' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFuQL7mRdZOhOnxh4FmlooKC",
            snippet: {
              title: "Adanna Duru 'Nappy Hour' EP",
            },
          },
          {
            id: "PL9tY0BWXOZFsdqMOtoU_pmEjQfaSgfdjP",
            snippet: {
              title: "August Alsina 'Myself' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFu6VDrrxdd_0qBle8MaF7k7",
            snippet: {
              title: "Vevo New Music Friday - March 3, 2023",
            },
          },
          {
            id: "PL9tY0BWXOZFum9zZLByCdjjZ7GT3hx8Jm",
            snippet: {
              title: "FNF Chop 'Who is Chop' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFv9YKqeyvYy0fapz7d0mceO",
            snippet: {
              title: "Remembering Gary Rossington of Lynyrd Skynyrd",
            },
          },
          {
            id: "PL9tY0BWXOZFs2lQy177Ir4EqClKAdx0GW",
            snippet: {
              title:
                "Elvis Costello & Burt Bacharach 'The Songs Of Bacharach & Costello' Album",
            },
          },
          {
            id: "PL9tY0BWXOZFvWv7ZVs2TSNLM94GrVloIM",
            snippet: {
              title:
                "The Last of Us: Season 1 (Soundtrack from the HBO Original Series)",
            },
          },
        ],
        selected: 15,
      },
      youtube_videos: {
        items: [
          {
            id: "UQQx9NA65bU",
            statistics: {
              viewCount: "1795391",
              likeCount: "111043",
              favoriteCount: "0",
              commentCount: "10747",
            },
            contentDetails: {
              duration: "PT3M35S",
            },
            snippet: {
              title: "Nicki Minaj - Red Ruby Da Sleeze (Official Audio)",
              description:
                "Music video by Nicki Minaj performing Red Ruby Da Sleeze (Audio). © 2023 Republic Records, a division of UMG Recordings, Inc.\n\nhttp://vevo.ly/t5UCqR",
              publishedAt: "2023-03-03T05:00:25Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/UQQx9NA65bU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "h6TPMkrmkDU",
            statistics: {
              viewCount: "33425",
              likeCount: "2568",
              favoriteCount: "0",
              commentCount: "260",
            },
            contentDetails: {
              duration: "PT2M35S",
            },
            snippet: {
              title: "BIA - SIXTEEN (Official Audio)",
              description:
                'BIA - SIXTEEN (Official Audio) \n\n"SIXTEEN" available at: https://OfficialBIA.lnk.to/SIXTEEN\n\nProduced by @AzizTheShake & @TimNihan\n\nFollow BIA:\nhttps://www.instagram.c..',
              publishedAt: "2023-03-03T05:00:31Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/h6TPMkrmkDU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "m44zx7JUksY",
            statistics: {
              viewCount: "93595",
              likeCount: "4788",
              favoriteCount: "0",
              commentCount: "205",
            },
            contentDetails: {
              duration: "PT2M22S",
            },
            snippet: {
              title: "EMELINE - feelings (Lyric Video)",
              description:
                "Listen to “feelings” here: https://emeline.lnk.to/feelingsID\n\nEMELINE Socials:\nTikTok - https://www.tiktok.com/@emelineisme \nInstagram - https://www.instagram.com/emel..",
              publishedAt: "2023-03-03T05:00:20Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/m44zx7JUksY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "RJAgBogWX2E",
            statistics: {
              viewCount: "62202",
              likeCount: "607",
              favoriteCount: "0",
              commentCount: "32",
            },
            contentDetails: {
              duration: "PT3M16S",
            },
            snippet: {
              title:
                "Priscilla Block - Couple Spring Breaks Back (Official Lyric Video)",
              description:
                'The official lyric video for Priscilla Block\'s "Couple Spring Breaks Back".\n\nListen to the song here: https://strm.to/CSBB\n\n****************************************** ..',
              publishedAt: "2023-03-03T05:00:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/RJAgBogWX2E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "JesMkxxlviQ",
            statistics: {
              viewCount: "21822",
              likeCount: "748",
              favoriteCount: "0",
              commentCount: "26",
            },
            contentDetails: {
              duration: "PT2M48S",
            },
            snippet: {
              title: "Mimi Webb - The Other Side (Official Audio)",
              description:
                'Mimi Webb - The Other Side (Official Audio)\n\n"Amelia" available at: https://MimiWebb.lnk.to/Amelia\n\nFollow Mimi Webb:\nhttps://www.instagram.com/mimiiiwebb/\nhttps://twi..',
              publishedAt: "2023-03-03T05:00:08Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/JesMkxxlviQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "LmNvdBRI6DQ",
            statistics: {
              viewCount: "35095",
              likeCount: "564",
              favoriteCount: "0",
              commentCount: "32",
            },
            contentDetails: {
              duration: "PT2M58S",
            },
            snippet: {
              title: "Beach Weather - Pineapple Sunrise (Lyric Video)",
              description:
                "Pineapple Sunrise (Lyric Video)\n\nListen to Pineapple Sunrise: https://BeachWeather.lnk.to/PineappleSunrise\n\nFollow Beach Weather:\nInstagram: https://www.instagram.com/..",
              publishedAt: "2023-03-03T05:00:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/LmNvdBRI6DQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "hHJuQRnoWCo",
            statistics: {
              viewCount: "16303",
              likeCount: "457",
              favoriteCount: "0",
              commentCount: "29",
            },
            contentDetails: {
              duration: "PT2M53S",
            },
            snippet: {
              title: "Mike Dimes - HEAVY METAL (Official Audio)",
              description:
                'Mike Dimes - HEAVY METAL (Official Audio)\n\n"HEAVY METAL" available at: https://MikeDimes.lnk.to/HEAVYMETAL\n\nFollow Mike Dimes:\nInstagram: https://www.instagram.com/mik..',
              publishedAt: "2023-03-03T05:00:30Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/hHJuQRnoWCo/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "sNUx9VZ2R5k",
            statistics: {
              viewCount: "7142",
              likeCount: "245",
              favoriteCount: "0",
              commentCount: "15",
            },
            contentDetails: {
              duration: "PT3M38S",
            },
            snippet: {
              title:
                "Chiiild - I Hope I Packed A Parachute (Audio) ft. Charlotte Cardin",
              description:
                "Music video by Chiiild performing I Hope I Packed A Parachute (Audio). © 2023 Avant Garden/4th & Broadway (Def Jam Recordings, Inc.)\n\nhttp://vevo.ly/3CTODw",
              publishedAt: "2023-03-03T05:00:33Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/sNUx9VZ2R5k/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "8DD5ONnE1i8",
            statistics: {
              viewCount: "13096",
              likeCount: "361",
              favoriteCount: "0",
              commentCount: "34",
            },
            contentDetails: {
              duration: "PT2M43S",
            },
            snippet: {
              title: "JAWNY - i look better when i’m in love (official audio)",
              description:
                "JAWNY – i look better when i’m in love\nListen to the debut album: https://JAWNY.lnk.to/ItsNeverFairAlwaysTrue\nSpotify: https://JAWNY.lnk.to/ItsNeverFairAlwaysTrue/spot..",
              publishedAt: "2023-03-03T05:00:09Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/8DD5ONnE1i8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "by5c0ZAviEU",
            statistics: {
              viewCount: "24531",
              likeCount: "2185",
              favoriteCount: "0",
              commentCount: "96",
            },
            contentDetails: {
              duration: "PT2M39S",
            },
            snippet: {
              title: "Jordan Ward - FAMJAM4000 (Official Visualizer)",
              description:
                "‘FORWARD’ is out now: https://jordanward.lnk.to/FORWARD\n \nFollow Jordan Ward:\nInstagram: https://www.instagram.com/jordanward\nTwitter: https://twitter.com/jordanward\nT..",
              publishedAt: "2023-03-03T05:00:28Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/by5c0ZAviEU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "G55VSt37PZU",
            statistics: {
              viewCount: "1944",
              likeCount: "126",
              favoriteCount: "0",
              commentCount: "10",
            },
            contentDetails: {
              duration: "PT2M52S",
            },
            snippet: {
              title: "Lebra Jolie - Meet Yo Mama (Official Audio)",
              description:
                'Listen to Lebra\'s new single "Meet Yo Mama" out now everywhere: \nhttps://LebraJolie.lnk.to/MeetYoMama\n \nFollow Lebra:\nhttps://www.instagram.com/itslebrajolie\nhttps://t..',
              publishedAt: "2023-03-01T05:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/G55VSt37PZU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "fWyLu63Pxi4",
            statistics: {
              viewCount: "28490",
              likeCount: "1850",
              favoriteCount: "0",
              commentCount: "105",
            },
            contentDetails: {
              duration: "PT3M5S",
            },
            snippet: {
              title: "Valley - Good, but not together (Official Lyric Video)",
              description:
                'Listen to & Download "Good, but not together" out now: https://valley.lnk.tt/goodbutnottogetherID\nOUR SECOND STUDIO ALBUM "LOST IN TRANSLATION" enters your world on Ju..',
              publishedAt: "2023-03-02T05:00:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/fWyLu63Pxi4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "-zv5IVoamr4",
            statistics: {
              viewCount: "72387",
              likeCount: "5991",
              favoriteCount: "0",
              commentCount: "403",
            },
            contentDetails: {
              duration: "PT4M5S",
            },
            snippet: {
              title:
                "The Weeknd - Less Than Zero (Live at SoFi Stadium) (Official Audio)",
              description:
                "Music video by The Weeknd performing Less Than Zero (After Hours (Live At SoFi) /Pseudo Video). © 2023 The Weeknd XO, Inc., manufactured and marketed by Republic Recor..",
              publishedAt: "2023-03-03T05:00:00Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/-zv5IVoamr4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "poRiJttZmxw",
            statistics: {
              viewCount: "4346",
              likeCount: "349",
              favoriteCount: "0",
              commentCount: "24",
            },
            contentDetails: {
              duration: "PT2M39S",
            },
            snippet: {
              title: "Christian French - thank god (Visualizer)",
              description:
                'presave my next song: ffm.to/cf2023\n \n"thank god" out now: https://ffm.to/cfthankgod \n \nshot by caden huston\n\nfollow me: \nInstagram: https://www.instagram.com/christia..',
              publishedAt: "2023-03-02T17:00:36Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/poRiJttZmxw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "vPUOrcxk3vo",
            statistics: {
              viewCount: "1116241",
              likeCount: "46425",
              favoriteCount: "0",
              commentCount: "2050",
            },
            contentDetails: {
              duration: "PT3M33S",
            },
            snippet: {
              title: "Miley Cyrus - Flowers (Demo) Official Audio",
              description:
                "Official Audio for “Flowers (Demo)” by Miley Cyrus\n\nListen to & Download “Flowers (Demo)” out now: https://mileycyrus.lnk.to/FlowersDemo\n\nPre-Order “Endless Summer Vac..",
              publishedAt: "2023-03-03T05:00:33Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/vPUOrcxk3vo/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "GKWsYJ3XTeo",
            statistics: {
              viewCount: "2618",
              likeCount: "149",
              favoriteCount: "0",
              commentCount: "11",
            },
            contentDetails: {
              duration: "PT3M5S",
            },
            snippet: {
              title:
                "Alana Springsteen - shoulder to cry on (Official Visualizer)",
              description:
                'Official Audio for "shoulder to cry on" by Alana Springsteen\n \nListen & Download "shoulder to cry on" out now: https://alanaspringsteen.lnk.to/shouldertocryon\n \nPre-Or..',
              publishedAt: "2023-03-03T05:00:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/GKWsYJ3XTeo/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QQvFf7an0es",
            statistics: {
              viewCount: "207367",
              likeCount: "509",
              favoriteCount: "0",
              commentCount: "34",
            },
            contentDetails: {
              duration: "PT2M29S",
            },
            snippet: {
              title: "Kevin Ross - Show & Prove (Official Lyric Video)",
              description:
                'Listen to the single “Show & Prove". Out Now!\nStream: https://music.empi.re/lookmyway\n\n\n\n#KevinRoss  #ShowNProve  #EMPIRE\n\n\n\nOfficial Lyric Video by Kevin Ross  - "Sho..',
              publishedAt: "2023-02-27T18:17:44Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QQvFf7an0es/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "k-gy_8TPLTE",
            statistics: {
              viewCount: "6002",
              likeCount: "181",
              favoriteCount: "0",
              commentCount: "14",
            },
            contentDetails: {
              duration: "PT2M49S",
            },
            snippet: {
              title: "Jake Isaac - STILL HAVE YOU (Lyric Video)",
              description:
                "STILL HAVE YOU - Jake Isaac\n\nStream 'STILL HAVE YOU' by Jake Isaac here: \n\nDirector: Emmanuel Adeyemi\n\nLyrics:\nSTILL HAVE YOU\n\nIf built a tower\nmade a name\nfar from th..",
              publishedAt: "2023-02-24T00:00:28Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/k-gy_8TPLTE/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "v8kFp02tw7k",
            statistics: {
              viewCount: "870",
              likeCount: "76",
              favoriteCount: "0",
              commentCount: "3",
            },
            contentDetails: {
              duration: "PT1M53S",
            },
            snippet: {
              title: "Slush Puppy - Billboard (Official Audio)",
              description:
                "Music video by Slush Puppy performing Billboard (Official Audio). (C) 2023 Disruptor Records/Sony Music Entertainment\n\nhttp://vevo.ly/jDHaih",
              publishedAt: "2023-03-03T08:00:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/v8kFp02tw7k/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "nyee-bZbfqk",
            statistics: {
              viewCount: "22765",
              likeCount: "803",
              favoriteCount: "0",
              commentCount: "88",
            },
            contentDetails: {
              duration: "PT3M47S",
            },
            snippet: {
              title: "Justin Moore - Stray Dogs (Lyric Video)",
              description:
                "Music video by Justin Moore performing Stray Dogs (Lyric Video). © 2023 Big Machine Label Group, LLC\n\nhttp://vevo.ly/hvpVbp",
              publishedAt: "2023-02-27T05:00:30Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/nyee-bZbfqk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "UQQx9NA65bU",
          "h6TPMkrmkDU",
          "m44zx7JUksY",
          "RJAgBogWX2E",
          "JesMkxxlviQ",
          "LmNvdBRI6DQ",
          "hHJuQRnoWCo",
          "sNUx9VZ2R5k",
          "8DD5ONnE1i8",
          "by5c0ZAviEU",
          "G55VSt37PZU",
          "fWyLu63Pxi4",
          "-zv5IVoamr4",
          "poRiJttZmxw",
          "vPUOrcxk3vo",
          "GKWsYJ3XTeo",
          "QQvFf7an0es",
          "k-gy_8TPLTE",
          "v8kFp02tw7k",
          "nyee-bZbfqk",
        ],
      },
    },
    enabled: true,
    created_at: 1645432941672,
    updated_at: 1645432941672,
    app_plan: "pro",
  },
  {
    id: "yta-nuk3hwsv7zk-1645438030881",
    name: "Youtube-Feed-1645438030881",
    setting: {
      id: "settings-4",
      label: "Video Gallery",
      banner: "video_gallery",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: false,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 2,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCG-8TGzkP7XhKKxTj261o1w",
        url: "https://www.youtube.com/channel/UCG-8TGzkP7XhKKxTj261o1w",
        title: "ArenaCommerce",
        titleCustom: "",
        description:
          "A place to buy beautiful Themes for your ecommerce website.",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/ytc/AL5GRJXbBS49AqQ4C4MauiJe5Twhz0n2xjH3JO4aM3BqPw=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/AiIIMHoN8oamPYSo_0t5lhWd3oJnPu80IjEtVU3wNnHksSMXu48SxDECLUu2T7N0d4-NCGTl",
        imageCustom: "",
        statistics: {
          viewCount: 132,
          subscriberCount: 518,
          videoCount: 132,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLsZwfcHiP6N9vuvB45s7TmPoTSbTYeUab",
            snippet: {
              title: "AnyFont",
            },
          },
          {
            id: "PLsZwfcHiP6N9uOJ5UtT741SgiaKi5EMtO",
            snippet: {
              title: "Arena Copy App",
            },
          },
          {
            id: "PLsZwfcHiP6N9MYpcK8PtwqoJj23ZyYjkD",
            snippet: {
              title: "Arena Copy App",
            },
          },
          {
            id: "PLsZwfcHiP6N8flFbYW-zhgEewi0nFq4gs",
            snippet: {
              title: "Native Translate app",
            },
          },
          {
            id: "PLsZwfcHiP6N8baYuQbcuU3y9yTsJ95Xwr",
            snippet: {
              title: "Native Translate",
            },
          },
          {
            id: "PLsZwfcHiP6N8xpgcJiMtRS5LdSu3t3wOw",
            snippet: {
              title: "Shopify Youtube Feed - Arenacommerce",
            },
          },
          {
            id: "PLsZwfcHiP6N-htOdWi2VlaRyn6h4gp_J6",
            snippet: {
              title: "Supply User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N_-a6zBgCezaCF2zVCq4T4E",
            snippet: {
              title: "XStore User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-tZB7qDcRCEofdNoJSyISJ",
            snippet: {
              title: "Electro 5 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-lBfCR4EOmc58LfcXxoch5",
            snippet: {
              title: "Chromium User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N9GjfAUWmsLQL-bLzd32J1S",
            snippet: {
              title: "Zeexo User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-uNlyuZwWuts3uw_2K6l3K",
            snippet: {
              title: "ArenaCommerce - General",
            },
          },
          {
            id: "PLsZwfcHiP6N8hQgl0vp-6SeGrLamkBLVH",
            snippet: {
              title: "Handy 4 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N8QndlmGAO1ax6H_f0LieaB",
            snippet: {
              title: "Shopify Themes",
            },
          },
        ],
        selected: -1,
      },
      youtube_videos: {
        items: [
          {
            id: "maG_qqUFd2c",
            statistics: {
              viewCount: "125",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT5M",
            },
            snippet: {
              title: "Shopify Advanced Custom Fields: Beginner's Guide",
              description:
                "In this video, we'll show you how to use custom fields (also known as metafields) to add extra information to your Shopify store. Custom fields can be used for a varie..",
              publishedAt: "2023-02-27T20:59:54Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/maG_qqUFd2c/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "4jEk2ryLds4",
            statistics: {
              viewCount: "218",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M38S",
            },
            snippet: {
              title: "ACF: Metafields Custom Fields Quick Start",
              description:
                "Turns sites into a fully-fledged content management by giving you all the tools to manage Metafields",
              publishedAt: "2023-01-29T02:29:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/4jEk2ryLds4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9Il-rykH7GI",
            statistics: {
              viewCount: "16",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M27S",
            },
            snippet: {
              title: "Add New Custom Font to your Shopify Themes",
              description:
                "Quickly change the font without the need for CSS knowledge. Or you can select from the Google font collection to add to your site. It even can store fonts in your stor..",
              publishedAt: "2023-01-10T18:29:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9Il-rykH7GI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "7sKbN_y5r0w",
            statistics: {
              viewCount: "53",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M21S",
            },
            snippet: {
              title:
                "How to add Google fonts to Your  Shopify Themes In Minutes",
              description:
                "Change any Google Fonts in a minute, 100% GDPR compliant with AnyFont app",
              publishedAt: "2023-01-06T10:42:42Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/7sKbN_y5r0w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "iw9PiUgA7Io",
            statistics: {
              viewCount: "573",
              likeCount: "7",
              favoriteCount: "0",
            },
            contentDetails: {
              duration: "PT1M42S",
            },
            snippet: {
              title:
                "How to Duplicate a Shopify Store in Minutes with AClone App",
              description:
                "AClone makes it easy to duplicate a Shopify store's content to another one. It will automatically copy your products, product images, collections, pages, blogs, and th..",
              publishedAt: "2022-12-13T20:03:49Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/iw9PiUgA7Io/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "BCzTZmGQIgk",
            statistics: {
              viewCount: "720",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M13S",
            },
            snippet: {
              title: "How to install Shopify themes with AClone app",
              description:
                "Requires:\n- Arena Shopify Admin Extension https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n- https://apps.sho..",
              publishedAt: "2022-12-03T05:32:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BCzTZmGQIgk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kSpZJlNScc0",
            statistics: {
              viewCount: "33",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT53S",
            },
            snippet: {
              title: "How to import data using Arena Copy App",
              description:
                "How to import data using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:34:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kSpZJlNScc0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9w2rJPHCff0",
            statistics: {
              viewCount: "15",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M23S",
            },
            snippet: {
              title: "How to export data with filters using Arena Copy App",
              description:
                "How to export data with filters using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:18:39Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9w2rJPHCff0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_SDZec8X-sY",
            statistics: {
              viewCount: "14",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M",
            },
            snippet: {
              title: "How to export data using Arena Copy App",
              description:
                "How to export data using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:16:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_SDZec8X-sY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "No0Nj36Cx4E",
            statistics: {
              viewCount: "19",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M2S",
            },
            snippet: {
              title:
                "Add a Currency Selector to your online store with Desktop screen",
              description:
                "Add a Currency Selector to your online store with Desktop screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2022-01-13T10:09:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/No0Nj36Cx4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "TVysb7WFhHU",
            statistics: {
              viewCount: "31",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M17S",
            },
            snippet: {
              title:
                "Add a Currency Selector to your online store with Mobile screen",
              description:
                "Add a Currency Selector to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2022-01-13T10:10:55Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/TVysb7WFhHU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kMkeMLybJIg",
            statistics: {
              viewCount: "39",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M25S",
            },
            snippet: {
              title:
                "Add a Language Switcher to your online store with Mobile screen",
              description:
                "Add a Language Switcher to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2021-12-27T08:20:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kMkeMLybJIg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "oxXWUtKYW-s",
            statistics: {
              viewCount: "140",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M",
            },
            snippet: {
              title:
                "Add a Language Switcher to your online store with Desktop screen",
              description:
                "Add a Language Switcher to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2021-12-27T08:18:30Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/oxXWUtKYW-s/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "CbM-kVb9Wdc",
            statistics: {
              viewCount: "451",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M10S",
            },
            snippet: {
              title:
                "How to insert language switcher into Theme header with Native Translate app",
              description:
                "How to insert language switcher into Theme header with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-14T10:18:40Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/CbM-kVb9Wdc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QemFgRoUaHc",
            statistics: {
              viewCount: "50",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT26S",
            },
            snippet: {
              title: "How to use Estimate feature with Native Translate app",
              description:
                "How to use Estimate feature with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-12T05:11:57Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QemFgRoUaHc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "E21IYXj7yZA",
            statistics: {
              viewCount: "595",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT27S",
            },
            snippet: {
              title: "How to add new store language with Native Translate app",
              description:
                "How to add new store language with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-09T04:31:21Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/E21IYXj7yZA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "naVh6TbhqGc",
            statistics: {
              viewCount: "1032",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT6M5S",
            },
            snippet: {
              title:
                "How to  customize the  Verticle mega menu for Chromium Shopify Theme",
              description: "",
              publishedAt: "2021-09-15T10:18:18Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/naVh6TbhqGc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "muhDoMVcKDI",
            statistics: {
              viewCount: "4994",
              likeCount: "19",
              favoriteCount: "0",
              commentCount: "3",
            },
            contentDetails: {
              duration: "PT3M41S",
            },
            snippet: {
              title:
                "How to add a new filter group to Collection sidebar in Shopify Theme",
              description: "",
              publishedAt: "2021-08-10T03:28:44Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/muhDoMVcKDI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_wB5ize57X0",
            statistics: {
              viewCount: "1024",
              likeCount: "3",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT7M14S",
            },
            snippet: {
              title:
                "Create JSON file for applying to online store's collection Filter",
              description: "",
              publishedAt: "2021-07-07T10:25:32Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_wB5ize57X0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "5SaKBu1xD4E",
            statistics: {
              viewCount: "52",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M46S",
            },
            snippet: {
              title: "How to change or hidden Youtube Feed from shop",
              description: "How to change or hidden Youtube Feed from shop",
              publishedAt: "2021-01-16T09:37:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5SaKBu1xD4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "maG_qqUFd2c",
          "4jEk2ryLds4",
          "9Il-rykH7GI",
          "7sKbN_y5r0w",
          "iw9PiUgA7Io",
          "BCzTZmGQIgk",
          "kSpZJlNScc0",
          "9w2rJPHCff0",
          "_SDZec8X-sY",
          "No0Nj36Cx4E",
          "TVysb7WFhHU",
          "kMkeMLybJIg",
          "oxXWUtKYW-s",
          "CbM-kVb9Wdc",
          "QemFgRoUaHc",
          "E21IYXj7yZA",
          "naVh6TbhqGc",
          "muhDoMVcKDI",
          "_wB5ize57X0",
          "5SaKBu1xD4E",
        ],
      },
    },
    enabled: true,
    created_at: 1645438030881,
    updated_at: 1645438030881,
    app_plan: "pro",
  },
  {
    id: "yta-hcidobxi3bj-1646368286780",
    name: "Youtube-Feed-TWICE",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCmth4hMyizG-_W9jidBqs_A",
        url: "https://www.youtube.com/channel/UCmth4hMyizG-_W9jidBqs_A",
        title: "Jaeguchi",
        titleCustom: "",
        description: "제구치입니다.",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/hFMe-vDcCrG9YzFdZ7_-APooGDs9c0Z-YJbPbWvXVTeH7z7o0VvYE66Vkibpfhp8sFrcV-J1s0I=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/5gn1T-wlGI0o6HdUzSrx4r34ee27WcDWq0Zp6-q98TTntZ9mmepJEB3RhCNphHy8yZiES-GM",
        imageCustom: "",
        statistics: {
          viewCount: 800,
          subscriberCount: 4970000,
          videoCount: 800,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLxm1PUY_4T4LNv_QBBKanRJs-9_2pmPDU",
            snippet: {
              title: "IZ*ONE",
            },
          },
          {
            id: "PLxm1PUY_4T4LE2P4ws4Slph87UeCZSU0k",
            snippet: {
              title: "ENHYPEN",
            },
          },
          {
            id: "PLxm1PUY_4T4KEmXsre0xwyxfP7e7II2BO",
            snippet: {
              title: "K/DA album",
            },
          },
          {
            id: "PLxm1PUY_4T4LsTBbt3T_9Ial6gdLgRArp",
            snippet: {
              title: "IU",
            },
          },
          {
            id: "PLxm1PUY_4T4J578u2-MV-OOLFcM0C6IbW",
            snippet: {
              title: "Red Velvet",
            },
          },
          {
            id: "PLxm1PUY_4T4IhOCmOve8Bov_jHdw3Pxoo",
            snippet: {
              title: "iKON",
            },
          },
          {
            id: "PLxm1PUY_4T4Kk5ohLShoy9hTxF559JjmR",
            snippet: {
              title: "GOT7",
            },
          },
          {
            id: "PLxm1PUY_4T4JicCtS6tzoCPyLmf6BE-SR",
            snippet: {
              title: "TWICE",
            },
          },
          {
            id: "PLxm1PUY_4T4Ij-tTJ7ZaQcgMhJ6LXAc07",
            snippet: {
              title: "SEVENTEEN",
            },
          },
          {
            id: "PLxm1PUY_4T4JjGBGzze339FyptcF_O-4g",
            snippet: {
              title: "EXO",
            },
          },
          {
            id: "PLxm1PUY_4T4IAUur-1XuQnwPGU1bX2YXc",
            snippet: {
              title: "ATEEZ",
            },
          },
          {
            id: "PLxm1PUY_4T4LOOVZD_NA_xlDAOTRVUbDs",
            snippet: {
              title: "EVERGLOW playlist",
            },
          },
          {
            id: "PLxm1PUY_4T4LI2N2iLNlqd02lm5KqMSZT",
            snippet: {
              title: "Stray Kids playlist",
            },
          },
          {
            id: "PLxm1PUY_4T4IAem21OS2zzh6GV78KC2hC",
            snippet: {
              title: "ITZY playlist",
            },
          },
          {
            id: "PLxm1PUY_4T4Lh0GtqBAps_HTLpnG6I3UY",
            snippet: {
              title: "BLACKPINK playlist",
            },
          },
          {
            id: "PLxm1PUY_4T4KvrDyaMMz0-tmXFTU1-9jv",
            snippet: {
              title: "BTS playlist",
            },
          },
          {
            id: "PLxm1PUY_4T4LMdjU8T4fAtUQI1PPlYaeE",
            snippet: {
              title: "Jaeguchi",
            },
          },
        ],
        selected: -1,
      },
      youtube_videos: {
        items: [
          {
            id: "j1U5Zcdu69M",
            statistics: {
              viewCount: "108519",
              likeCount: "4480",
              favoriteCount: "0",
              commentCount: "252",
            },
            contentDetails: {
              duration: "PT3M2S",
            },
            snippet: {
              title:
                "TWICE SET ME FREE Lyrics (트와이스 SET ME FREE 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by JYP Entertainment\n\n• Artist: TWICE (트와이스)\n• Song ♫: SET ME FREE\n• Album: READY TO BE\n• Released: 2023.03.10\n..................................",
              publishedAt: "2023-03-10T05:22:49Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/j1U5Zcdu69M/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QCLu7it5ofE",
            statistics: {
              viewCount: "38957",
              likeCount: "2118",
              favoriteCount: "0",
              commentCount: "81",
            },
            contentDetails: {
              duration: "PT3M11S",
            },
            snippet: {
              title:
                "MINNIE ((G)I-DLE), Anne-Marie 'Expectations' Lyrics (Color Coded Lyrics)",
              description:
                "All Rights Administered by Warner Music Korea\n\n• Artist: Anne-Marie & 민니 ((여자)아이들) & (여자)아이들\n• Song ♫: Expectations\n• Album: Expectations\n• Released: 2023.09.03\n........",
              publishedAt: "2023-03-09T09:20:04Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QCLu7it5ofE/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "u62pEY__kj0",
            statistics: {
              viewCount: "99893",
              likeCount: "4473",
              favoriteCount: "0",
              commentCount: "165",
            },
            contentDetails: {
              duration: "PT3M35S",
            },
            snippet: {
              title:
                "j-hope & J.Cole 'on the street' Lyrics (Color Coded Lyrics)",
              description:
                "All Rights Administered by Big Hit Labels\n\n• Artist: j-hope & J.Cole\n• Song ♫: on the street\n• Album: on the street\n• Released: 2023.03.03\n..............................",
              publishedAt: "2023-03-03T05:27:33Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/u62pEY__kj0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "6bC2LwKTHnk",
            statistics: {
              viewCount: "234611",
              likeCount: "6962",
              favoriteCount: "0",
              commentCount: "163",
            },
            contentDetails: {
              duration: "PT2M55S",
            },
            snippet: {
              title:
                "FIFTY FIFTY Cupid Lyrics (피프티피프티 Cupid 가사) (Color Coded Lyrics)",
              description:
                'All Rights Administered by Attrakt\n\n• Artist: FIFTY FIFTY (피프티피프티)\n• Song ♫: Cupid\n• Album: The 1st Single Album “The Beginning: Cupid"\n• Released: 2023.02.24\n..........',
              publishedAt: "2023-02-24T09:20:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/6bC2LwKTHnk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "0ynZSO69ob4",
            statistics: {
              viewCount: "194120",
              likeCount: "3548",
              favoriteCount: "0",
              commentCount: "66",
            },
            contentDetails: {
              duration: "PT3M23S",
            },
            snippet: {
              title: "XG SHOOTING STAR Lyrics (Color Coded Lyrics)",
              description:
                "ll Rights Administered by Xgalx\n\n• Artist: XG (Xtraordinary Girls)\n• Song ♫: SHOOTING STAR\n• Album: SHOOTING STAR\n• Released: 2023.1.25\n.................................",
              publishedAt: "2023-02-20T06:20:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/0ynZSO69ob4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "fT2aW8ASncQ",
            statistics: {
              viewCount: "134846",
              likeCount: "2532",
              favoriteCount: "0",
              commentCount: "74",
            },
            contentDetails: {
              duration: "PT3M29S",
            },
            snippet: {
              title: "XG - LEFT RIGHT (Color Coded Lyrics)",
              description:
                "All Rights Administered by Xgalx\n\n• Artist: XG (Xtraordinary Girls)\n• Song ♫: LEFT RIGHT\n• Album: SHOOTING STAR\n• Released: 2023.1.25\n...................................",
              publishedAt: "2023-02-15T10:14:27Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/fT2aW8ASncQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "VilKjKdoQOc",
            statistics: {
              viewCount: "546494",
              likeCount: "5408",
              favoriteCount: "0",
              commentCount: "236",
            },
            contentDetails: {
              duration: "PT3M11S",
            },
            snippet: {
              title:
                "STAYC Teddy Bear Lyrics (스테이씨 Teddy Bear 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by High Up Entertainment\n\n• Artist: STAYC 스테이씨\n• Song ♫: Teddy Bear \n• Album: Teddy Bear\n• Released: 2023.02.14\n.................................",
              publishedAt: "2023-02-14T10:36:08Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/VilKjKdoQOc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "b8ch8cbIUxI",
            statistics: {
              viewCount: "657914",
              likeCount: "7621",
              favoriteCount: "0",
              commentCount: "198",
            },
            contentDetails: {
              duration: "PT3M25S",
            },
            snippet: {
              title:
                "BSS (SEVENTEEN) Fighting (feat. Lee Young Ji) Lyrics (부석순 이영지 '파이팅 해야지' 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by Pledis Entertainment\n\n• Artist: 부석순(BSS) (SEVENTEEN)\n• Song ♫: 파이팅 해야지 (Fighting)\n• Album: 부석순 1st Single Album 'SECOND WIND'\n• Released: 20..",
              publishedAt: "2023-02-06T09:48:46Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/b8ch8cbIUxI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "wBm4nFmP9ew",
            statistics: {
              viewCount: "199690",
              likeCount: "3305",
              favoriteCount: "0",
              commentCount: "144",
            },
            contentDetails: {
              duration: "PT3M42S",
            },
            snippet: {
              title: "NCT 127 Ay-Yo Lyrics (Color Coded Lyrics)",
              description:
                'All Rights Administered by SM Entertainment\n\n• Artist: NCT 127 엔시티 127\n• Song ♫: Ay-Yo\n• Album: 4th album repackage "Ay-Yo" \n• Released: 2023.01.30\n.....................',
              publishedAt: "2023-01-30T09:53:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/wBm4nFmP9ew/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "1QoSkGMQLx4",
            statistics: {
              viewCount: "1675633",
              likeCount: "51777",
              favoriteCount: "0",
              commentCount: "1477",
            },
            contentDetails: {
              duration: "PT2M38S",
            },
            snippet: {
              title:
                "TXT Tinnitus (돌멩이가 되고 싶어) Lyrics (Color Coded Lyrics)",
              description:
                "All Rights Administered by BIGHIT MUSIC\n\n• Artist: TXT (투모로우바이투게더)\n• Song ♫: Tinnitus (돌멩이가 되고 싶어)\n• Album: 이름의 장 : TEMPTATION\n• Released: 2023.01.27\n...................",
              publishedAt: "2023-01-27T07:15:51Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/1QoSkGMQLx4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "DaFZ_XpfbMA",
            statistics: {
              viewCount: "1063925",
              likeCount: "18954",
              favoriteCount: "0",
              commentCount: "520",
            },
            contentDetails: {
              duration: "PT3M7S",
            },
            snippet: {
              title: "TXT Sugar Rush Ride Lyrics (Color Coded Lyrics)",
              description:
                "All Rights Administered by BIGHIT MUSIC\n\n• Artist: TXT (투모로우바이투게더)\n• Song ♫: Sugar Rush Ride\n• Album: 이름의 장 : TEMPTATION\n• Released: 2023.01.27\n.........................",
              publishedAt: "2023-01-27T05:27:09Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/DaFZ_XpfbMA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "Tc1Yg9TWVpg",
            statistics: {
              viewCount: "865435",
              likeCount: "15882",
              favoriteCount: "0",
              commentCount: "720",
            },
            contentDetails: {
              duration: "PT3M1S",
            },
            snippet: {
              title:
                "TWICE (트와이스) 'MOONLIGHT SUNRISE' Lyrics (Color Coded Lyrics)",
              description:
                "All Rights Administered by JYP Entertainment\n\n• Artist: TWICE (트와이스)\n• Song ♫: MOONLIGHT SUNRISE\n• Album: MOONLIGHT SUNRISE\n• Released: 2023.01.20\n......................",
              publishedAt: "2023-01-20T05:31:19Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Tc1Yg9TWVpg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_oTwiOQiPts",
            statistics: {
              viewCount: "889546",
              likeCount: "19110",
              favoriteCount: "0",
              commentCount: "540",
            },
            contentDetails: {
              duration: "PT2M58S",
            },
            snippet: {
              title:
                "TAEYANG 'VIBE (feat. BTS JIMIN)' Lyrics (태양 지민 VIBE 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by THE BLACK LABEL\n\n• Artist: TAEYANG (태양)\n• Song ♫: VIBE (feat. BTS JIMIN)\n• Album: Vibe\n• Released: 2022.11.07\n................................",
              publishedAt: "2023-01-13T05:29:20Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_oTwiOQiPts/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "hc32lb0po9U",
            statistics: {
              viewCount: "7431837",
              likeCount: "63084",
              favoriteCount: "0",
              commentCount: "1754",
            },
            contentDetails: {
              duration: "PT3M33S",
            },
            snippet: {
              title:
                "NewJeans OMG Lyrics (뉴진스 OMG 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by ADOR\n\n• Artist: NEWJEANS (뉴진스)\n• Song ♫: OMG\n• Album: NewJeans 'OMG'\n• Released: 2023.01.02\n........................................\n.........",
              publishedAt: "2023-01-02T09:58:46Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/hc32lb0po9U/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "haCpjUXIhrI",
            statistics: {
              viewCount: "9388337",
              likeCount: "90905",
              favoriteCount: "0",
              commentCount: "2744",
            },
            contentDetails: {
              duration: "PT3M7S",
            },
            snippet: {
              title:
                "NewJeans Ditto Lyrics (뉴진스 Ditto 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by ADOR\n\n• Artist: NewJeans (뉴진스)\n• Song ♫: Ditto \n• Album: Ditto - Pre-realese Single\n• Released: 2022.12.19\n...................................",
              publishedAt: "2022-12-19T10:15:55Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/haCpjUXIhrI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "KJ5OV8P1iQw",
            statistics: {
              viewCount: "2063169",
              likeCount: "18709",
              favoriteCount: "0",
              commentCount: "362",
            },
            contentDetails: {
              duration: "PT3M41S",
            },
            snippet: {
              title:
                "NCT DREAM Candy Lyrics (엔시티 드림 Candy 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by SM Entertainment\n\n• Artist: NCT DREAM 엔시티 드림\n• Song ♫: Candy\n• Album: Candy - Winter Special Mini Album\n• Released: 2022.12.16\n...............",
              publishedAt: "2022-12-16T09:37:48Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/KJ5OV8P1iQw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "h2KoZooGKjY",
            statistics: {
              viewCount: "437027",
              likeCount: "19414",
              favoriteCount: "0",
              commentCount: "556",
            },
            contentDetails: {
              duration: "PT2M45S",
            },
            snippet: {
              title: "RM Lonely Lyrics (Color Coded Lyrics)",
              description:
                "All Rights Administered by BIGHIT MUSIC \n\n• Artist: RM\n• Song ♫: Lonely\n• Album: Indigo\n• Released: 2022.12.02\n........................................\n.................",
              publishedAt: "2022-12-02T05:56:43Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/h2KoZooGKjY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "xudb5vddb1Q",
            statistics: {
              viewCount: "533080",
              likeCount: "18769",
              favoriteCount: "0",
              commentCount: "533",
            },
            contentDetails: {
              duration: "PT3M16S",
            },
            snippet: {
              title: "RM Closer (with Paul Blanco, Mahalia) Lyrics",
              description:
                "All Rights Administered by BIGHIT MUSIC \n\n• Artist: RM\n• Song ♫: Closer (with Paul Blanco, Mahalia)\n• Album: Indigo\n• Released: 2022.12.02\n..............................",
              publishedAt: "2022-12-02T05:42:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/xudb5vddb1Q/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "UYyfTEPwYlg",
            statistics: {
              viewCount: "1584840",
              likeCount: "15664",
              favoriteCount: "0",
              commentCount: "325",
            },
            contentDetails: {
              duration: "PT3M3S",
            },
            snippet: {
              title:
                "ITZY CHESHIRE Lyrics (있지 CHESHIRE 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by JYP Entertainment\n\n• Artist: ITZY (있지)\n• Song ♫: CHESHIRE\n• Album: CHESHIRE\n• Released: 2022.11.30\n........................................\n..",
              publishedAt: "2022-11-30T09:30:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/UYyfTEPwYlg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "zx54nG8hzUI",
            statistics: {
              viewCount: "639979",
              likeCount: "7396",
              favoriteCount: "0",
              commentCount: "241",
            },
            contentDetails: {
              duration: "PT2M44S",
            },
            snippet: {
              title:
                "tripleS AAA Generation Lyrics (트리플에스 Generation 가사) (Color Coded Lyrics)",
              description:
                "All Rights Administered by MODHAUS\n\n• Artist: tripleS : Acid Angel from Asia.SSS (트리플에스)\n• Song ♫: Generation\n• Album: Physical Release [ACCESS]\n• Released: 2022.10.28..",
              publishedAt: "2022-10-28T17:53:22Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/zx54nG8hzUI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "j1U5Zcdu69M",
          "QCLu7it5ofE",
          "u62pEY__kj0",
          "6bC2LwKTHnk",
          "0ynZSO69ob4",
          "fT2aW8ASncQ",
          "VilKjKdoQOc",
          "b8ch8cbIUxI",
          "wBm4nFmP9ew",
          "1QoSkGMQLx4",
          "DaFZ_XpfbMA",
          "Tc1Yg9TWVpg",
          "_oTwiOQiPts",
          "hc32lb0po9U",
          "haCpjUXIhrI",
          "KJ5OV8P1iQw",
          "h2KoZooGKjY",
          "xudb5vddb1Q",
          "UYyfTEPwYlg",
          "zx54nG8hzUI",
        ],
      },
    },
    enabled: true,
    created_at: 1646368286780,
    updated_at: 1646368286780,
    app_plan: "pro",
  },
  {
    id: "yta-nolzge4wk1-1663295136997",
    name: "Youtube-Feed-1663295136997",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UC0AMN_aNRWReYumuM-UtIRQ",
        url: "https://www.youtube.com/channel/UC0AMN_aNRWReYumuM-UtIRQ",
        title: "YOYO Music",
        titleCustom: "",
        description:
          "This is Hong An Entertainment official Youtube channel.\nAll the new works shall be published and updated on the weekly basis. Pls.contact banquyen.hongan@gmail.com or banquyen@hamedia.vn on copyright matter. All copyright infringement is strictly prohibited.\n",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/8q1rLyMyjTajgZVNevsAoj6YJmqe0LK59u_hTuh8mdrc4kkyuIUm_eHE5J8fDshkr7t1GQT4JA=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/kHBwn1OazFbmDX82lZi07uRs0inS9nYkggqbd27SW2c0yhpcOKua13idVy1Q79F5KbdCzb3IDg",
        imageCustom: "",
        statistics: {
          viewCount: 270,
          subscriberCount: 44800,
          videoCount: 270,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLlaCuQegEeFmCoo0ScRpiAxkBfokXFFeh",
            snippet: {
              title: "Những Ca Khúc Indie Hay Nhất",
            },
          },
          {
            id: "PLlaCuQegEeFm4q9QehpEd_IgSD0bpj436",
            snippet: {
              title: "YOYO Music",
            },
          },
        ],
        selected: -1,
      },
      youtube_videos: {
        items: [
          {
            id: "FR8MLdqP1OQ",
            statistics: {
              viewCount: "423",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H31M7S",
            },
            snippet: {
              title:
                "Mascara, Vì Anh Đâu Có Biết, Lạ Lùng - Những Ca Khúc Hay Nhất Của Chillies, Madihu, Vũ.,...",
              description:
                "Mascara, Vì Anh Đâu Có Biết, Lạ Lùng - Những Ca Khúc Hay Nhất Của Chillies, Madihu, Vũ.,...\nMascara, Vì Anh Đâu Có Biết, Lạ Lùng - Những Ca Khúc Hay Nhất Của Chillies,..",
              publishedAt: "2023-03-13T01:00:05Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/FR8MLdqP1OQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "z0-kR42PEl0",
            statistics: {
              viewCount: "2486",
              likeCount: "10",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H26M3S",
            },
            snippet: {
              title:
                "Bước Qua Nhau, Lạ Lùng, Đã Lỡ Yêu Em Nhiều - Những Ca Khúc Hay Nhất Của Vũ., Justatee...",
              description:
                "Bước Qua Nhau, Lạ Lùng, Đã Lỡ Yêu Em Nhiều - Những Ca Khúc Hay Nhất Của Vũ., Justatee...\nBước Qua Nhau, Lạ Lùng, Đã Lỡ Yêu Em Nhiều - Những Ca Khúc Hay Nhất Của Vũ., J..",
              publishedAt: "2023-03-12T01:00:31Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/z0-kR42PEl0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "JsqNYCBL37o",
            statistics: {
              viewCount: "4112",
              likeCount: "18",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H31M53S",
            },
            snippet: {
              title:
                "Thằng Điên, Đã Lỡ Yêu Em Nhiều, Có Em Đời Bỗng Vui- Những Ca Khúc Hay Nhất Của Justatee, Chillies...",
              description:
                "Thằng Điên, Đã Lỡ Yêu Em Nhiều, Có Em Đời Bỗng Vui- Những Ca Khúc Hay Nhất Của Justatee, Chillies...\nThằng Điên, Đã Lỡ Yêu Em Nhiều, Có Em Đời Bỗng Vui- Những Ca Khúc ..",
              publishedAt: "2023-03-12T01:00:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/JsqNYCBL37o/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "NWK0WCJC6-Q",
            statistics: {
              viewCount: "4563",
              likeCount: "16",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H31M34S",
            },
            snippet: {
              title:
                "Suýt Nữa Thì, Chiều Hôm Ấy, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Andiez, Jaykii,...",
              description:
                "Suýt Nữa Thì, Chiều Hôm Ấy, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Andiez, Jaykii,...\nSuýt Nữa Thì, Chiều Hôm Ấy, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-11T01:00:08Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/NWK0WCJC6-Q/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "hFWdsEZFynY",
            statistics: {
              viewCount: "7783",
              likeCount: "24",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H28M21S",
            },
            snippet: {
              title:
                "Tháng Năm, Tâm Sự Tuổi 30, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Soobin Hoàng Sơn, Jaykii...",
              description:
                "Tháng Năm, Tâm Sự Tuổi 30, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Soobin Hoàng Sơn, Jaykii...\nTháng Năm, Tâm Sự Tuổi 30, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của S..",
              publishedAt: "2023-03-10T01:00:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/hFWdsEZFynY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "p4NkaNv_p7w",
            statistics: {
              viewCount: "3990",
              likeCount: "18",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H32M58S",
            },
            snippet: {
              title:
                "Vì Anh Đâu Có Biết, Và Thế Là Hết, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Chillies...",
              description:
                "Vì Anh Đâu Có Biết, Và Thế Là Hết, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Chillies...\nVì Anh Đâu Có Biết, Và Thế Là Hết, Bước Qua Nhau - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-09T01:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/p4NkaNv_p7w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "Jytbux4s_kA",
            statistics: {
              viewCount: "2204",
              likeCount: "7",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H25M16S",
            },
            snippet: {
              title:
                "Phía Sau Một Cô Gái, Xin Đừng Lặng Im, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...",
              description:
                "Phía Sau Một Cô Gái, Xin Đừng Lặng Im, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...\nPhía Sau Một Cô Gái, Xin Đừng Lặng Im, Bước Qua Nhau - Những Ca Khúc ..",
              publishedAt: "2023-03-09T01:00:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Jytbux4s_kA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "0GINKYam2q4",
            statistics: {
              viewCount: "2328",
              likeCount: "10",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H26M9S",
            },
            snippet: {
              title:
                "Đi Để Trở Về 1, Vì Anh Đâu Có Biết, Bắt Cóc Con Tim - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...",
              description:
                "Đi Để Trở Về 1, Vì Anh Đâu Có Biết, Bắt Cóc Con Tim - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...\nĐi Để Trở Về 1, Vì Anh Đâu Có Biết, Bắt Cóc Con Tim - Những Ca Khúc Ha..",
              publishedAt: "2023-03-08T01:00:00Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/0GINKYam2q4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "KK3BHH9rJ7Q",
            statistics: {
              viewCount: "1998",
              likeCount: "5",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H28M57S",
            },
            snippet: {
              title:
                "Đông Kiếm Em, 2AM, Phút Ban Đầu, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Justatee,...",
              description:
                "Đông Kiếm Em, 2AM, Phút Ban Đầu, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Justatee,...\nĐông Kiếm Em, 2AM, Phút Ban Đầu, Bước Qua Nhau - Những Ca Khúc Hay Nhất C..",
              publishedAt: "2023-03-07T01:15:02Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/KK3BHH9rJ7Q/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kroP32Khz58",
            statistics: {
              viewCount: "5295",
              likeCount: "14",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H23M12S",
            },
            snippet: {
              title:
                "Lạ Lùng, Và Thế Là Hết, Sao Em Nỡ, Có Em Đời Bỗng Vui - Những Ca Khúc Hay Nhất Của Vũ., Chillies,...",
              description:
                "Lạ Lùng, Và Thế Là Hết, Sao Em Nỡ, Có Em Đời Bỗng Vui - Những Ca Khúc Hay Nhất Của Vũ., Chillies,...\nLạ Lùng, Và Thế Là Hết, Sao Em Nỡ, Có Em Đời Bỗng Vui - Những Ca K..",
              publishedAt: "2023-03-07T01:00:26Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kroP32Khz58/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "c38DAepI9vA",
            statistics: {
              viewCount: "6628",
              likeCount: "15",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H32M24S",
            },
            snippet: {
              title:
                "Bước Qua Mùa Cô Đơn, Bước Qua Nhau, Sao Em Nỡ - Những Ca Khúc Hay Nhất Của Vũ., Jaykii...",
              description:
                "Bước Qua Mùa Cô Đơn, Bước Qua Nhau, Sao Em Nỡ - Những Ca Khúc Hay Nhất Của Vũ., Jaykii...\nBước Qua Mùa Cô Đơn, Bước Qua Nhau, Sao Em Nỡ - Những Ca Khúc Hay Nhất Của Vũ..",
              publishedAt: "2023-03-06T01:00:21Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/c38DAepI9vA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "vZWMaVGvIvk",
            statistics: {
              viewCount: "9740",
              likeCount: "25",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H32M20S",
            },
            snippet: {
              title:
                "Phút Ban Đầu, Phía Sau Một Cô Gái, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Soobin...",
              description:
                "Phút Ban Đầu, Phía Sau Một Cô Gái, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Soobin...\nPhút Ban Đầu, Phía Sau Một Cô Gái, Bước Qua Nhau - Những Ca Khúc Hay Nhất ..",
              publishedAt: "2023-03-05T01:00:31Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/vZWMaVGvIvk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "C_W7WIOkTSw",
            statistics: {
              viewCount: "9495",
              likeCount: "27",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT1H37M23S",
            },
            snippet: {
              title:
                "Lời Xin Lỗi Vụng Về, Sai Người Sai Thời Điểm - Những Ca Khúc Hay Nhất Của Quân A.P, Thanh Hưng,...",
              description:
                "Lời Xin Lỗi Vụng Về, Sai Người Sai Thời Điểm - Những Ca Khúc Hay Nhất Của Quân A.P, Thanh Hưng,...\nLời Xin Lỗi Vụng Về, Sai Người Sai Thời Điểm - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-04T01:00:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/C_W7WIOkTSw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "299m5VLdHmc",
            statistics: {
              viewCount: "2026",
              likeCount: "7",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H29M58S",
            },
            snippet: {
              title:
                "Có Em Đời Bỗng Vui, Bước Qua Nhau, Và Thế Là Hết - Những Ca Khúc Hay Nhất Của Vũ., Chillies...",
              description:
                "Có Em Đời Bỗng Vui, Bước Qua Nhau, Và Thế Là Hết - Những Ca Khúc Hay Nhất Của Vũ., Chillies...\nCó Em Đời Bỗng Vui, Bước Qua Nhau, Và Thế Là Hết - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-03T01:15:00Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/299m5VLdHmc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "k5fpRotgL-A",
            statistics: {
              viewCount: "10970",
              likeCount: "38",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H32M59S",
            },
            snippet: {
              title:
                "Bước Qua Mùa Cô Đơn, Và Thế Là Hết, Đừng Như Thói Quen - Những Ca Khúc Hay Nhất Của Vũ., Chillies...",
              description:
                "Bước Qua Mùa Cô Đơn, Và Thế Là Hết, Đừng Như Thói Quen - Những Ca Khúc Hay Nhất Của Vũ., Chillies...\nBước Qua Mùa Cô Đơn, Và Thế Là Hết, Đừng Như Thói Quen - Những Ca ..",
              publishedAt: "2023-03-02T01:15:02Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/k5fpRotgL-A/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9ETyokar2tQ",
            statistics: {
              viewCount: "2099",
              likeCount: "9",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H33M43S",
            },
            snippet: {
              title:
                "Và Thế Là Hết, Lạ Lùng, Phía Sau Một Cô Gái - Những Ca Khúc Hay Nhất Của Chillies, Vũ., Soobin...",
              description:
                "Và Thế Là Hết, Lạ Lùng, Phía Sau Một Cô Gái - Những Ca Khúc Hay Nhất Của Chillies, Vũ., Soobin...\nVà Thế Là Hết, Lạ Lùng, Phía Sau Một Cô Gái - Những Ca Khúc Hay Nhất ..",
              publishedAt: "2023-03-02T01:00:03Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9ETyokar2tQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "UaGypCRMX9U",
            statistics: {
              viewCount: "24956",
              likeCount: "72",
              favoriteCount: "0",
              commentCount: "8",
            },
            contentDetails: {
              duration: "PT1H34M39S",
            },
            snippet: {
              title:
                "Xin Đừng Lặng Im, Chiều Hôm Ấy, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Jaykii, Vũ.,...",
              description:
                "Xin Đừng Lặng Im, Chiều Hôm Ấy, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Jaykii, Vũ.,...\nXin Đừng Lặng Im, Chiều Hôm Ấy, Bước Qua Nhau - Những Ca Khúc Hay Nh..",
              publishedAt: "2023-03-01T01:15:03Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/UaGypCRMX9U/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "Z7p9EiZ6z2w",
            statistics: {
              viewCount: "3100",
              likeCount: "11",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H24M43S",
            },
            snippet: {
              title:
                "Vì Anh Đâu Có Biết, Đường Tôi Chở Em Về - Những Ca Khúc Hay Nhất Của Madihu, Vũ.,...",
              description:
                "Vì Anh Đâu Có Biết, Đường Tôi Chở Em Về - Những Ca Khúc Hay Nhất Của Madihu, Vũ.,...\nVì Anh Đâu Có Biết, Đường Tôi Chở Em Về - Những Ca Khúc Hay Nhất Của Madihu, Vũ.,...",
              publishedAt: "2023-03-01T01:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Z7p9EiZ6z2w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "MTozpNBDFC4",
            statistics: {
              viewCount: "895",
              likeCount: "4",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H34M21S",
            },
            snippet: {
              title:
                "Sài Gòn Đau Lòng Quá,Bước Qua Mùa Cô Đơn- Những Ca Khúc Hay Nhất Của Hứa Kim Tuyền, Vũ.,...",
              description:
                "Sài Gòn Đau Lòng Quá, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Hứa Kim Tuyền, Vũ.,...\nSài Gòn Đau Lòng Quá, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Hứ..",
              publishedAt: "2023-02-28T01:00:16Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/MTozpNBDFC4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "O74P5rve0VI",
            statistics: {
              viewCount: "10398",
              likeCount: "40",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H32M30S",
            },
            snippet: {
              title:
                "Tâm Sự Tuổi 30, Suýt Nữa Thì, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Trịnh Thăng Bình, Andiez,...",
              description:
                "Tâm Sự Tuổi 30, Suýt Nữa Thì, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Trịnh Thăng Bình, Andiez,...\nTâm Sự Tuổi 30, Suýt Nữa Thì, Chiều Hôm Ấy - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-02-27T01:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/O74P5rve0VI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "FR8MLdqP1OQ",
          "z0-kR42PEl0",
          "JsqNYCBL37o",
          "NWK0WCJC6-Q",
          "hFWdsEZFynY",
          "p4NkaNv_p7w",
          "Jytbux4s_kA",
          "0GINKYam2q4",
          "KK3BHH9rJ7Q",
          "kroP32Khz58",
          "c38DAepI9vA",
          "vZWMaVGvIvk",
          "C_W7WIOkTSw",
          "299m5VLdHmc",
          "k5fpRotgL-A",
          "9ETyokar2tQ",
          "UaGypCRMX9U",
          "Z7p9EiZ6z2w",
          "MTozpNBDFC4",
          "O74P5rve0VI",
        ],
      },
    },
    enabled: true,
    created_at: 1663295136997,
    updated_at: 1663295136997,
    app_plan: "pro",
  },
  {
    id: "yta-q7zyuyyvbvh-1668148824389",
    name: "Youtube-Feed-1668148824389",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCG-8TGzkP7XhKKxTj261o1w",
        url: "https://www.youtube.com/channel/UCG-8TGzkP7XhKKxTj261o1w",
        title: "ArenaCommerce",
        titleCustom: "",
        description:
          "A place to buy beautiful Themes for your ecommerce website.",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/ytc/AL5GRJXbBS49AqQ4C4MauiJe5Twhz0n2xjH3JO4aM3BqPw=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/AiIIMHoN8oamPYSo_0t5lhWd3oJnPu80IjEtVU3wNnHksSMXu48SxDECLUu2T7N0d4-NCGTl",
        imageCustom: "",
        statistics: {
          viewCount: 132,
          subscriberCount: 518,
          videoCount: 132,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLsZwfcHiP6N9vuvB45s7TmPoTSbTYeUab",
            snippet: {
              title: "AnyFont",
            },
          },
          {
            id: "PLsZwfcHiP6N9uOJ5UtT741SgiaKi5EMtO",
            snippet: {
              title: "Arena Copy App",
            },
          },
          {
            id: "PLsZwfcHiP6N9MYpcK8PtwqoJj23ZyYjkD",
            snippet: {
              title: "Arena Copy App",
            },
          },
          {
            id: "PLsZwfcHiP6N8flFbYW-zhgEewi0nFq4gs",
            snippet: {
              title: "Native Translate app",
            },
          },
          {
            id: "PLsZwfcHiP6N8baYuQbcuU3y9yTsJ95Xwr",
            snippet: {
              title: "Native Translate",
            },
          },
          {
            id: "PLsZwfcHiP6N8xpgcJiMtRS5LdSu3t3wOw",
            snippet: {
              title: "Shopify Youtube Feed - Arenacommerce",
            },
          },
          {
            id: "PLsZwfcHiP6N-htOdWi2VlaRyn6h4gp_J6",
            snippet: {
              title: "Supply User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N_-a6zBgCezaCF2zVCq4T4E",
            snippet: {
              title: "XStore User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-tZB7qDcRCEofdNoJSyISJ",
            snippet: {
              title: "Electro 5 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-lBfCR4EOmc58LfcXxoch5",
            snippet: {
              title: "Chromium User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N9GjfAUWmsLQL-bLzd32J1S",
            snippet: {
              title: "Zeexo User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-uNlyuZwWuts3uw_2K6l3K",
            snippet: {
              title: "ArenaCommerce - General",
            },
          },
          {
            id: "PLsZwfcHiP6N8hQgl0vp-6SeGrLamkBLVH",
            snippet: {
              title: "Handy 4 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N8QndlmGAO1ax6H_f0LieaB",
            snippet: {
              title: "Shopify Themes",
            },
          },
        ],
        selected: -1,
      },
      youtube_videos: {
        items: [
          {
            id: "maG_qqUFd2c",
            statistics: {
              viewCount: "125",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT5M",
            },
            snippet: {
              title: "Shopify Advanced Custom Fields: Beginner's Guide",
              description:
                "In this video, we'll show you how to use custom fields (also known as metafields) to add extra information to your Shopify store. Custom fields can be used for a varie..",
              publishedAt: "2023-02-27T20:59:54Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/maG_qqUFd2c/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "4jEk2ryLds4",
            statistics: {
              viewCount: "218",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M38S",
            },
            snippet: {
              title: "ACF: Metafields Custom Fields Quick Start",
              description:
                "Turns sites into a fully-fledged content management by giving you all the tools to manage Metafields",
              publishedAt: "2023-01-29T02:29:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/4jEk2ryLds4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9Il-rykH7GI",
            statistics: {
              viewCount: "16",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M27S",
            },
            snippet: {
              title: "Add New Custom Font to your Shopify Themes",
              description:
                "Quickly change the font without the need for CSS knowledge. Or you can select from the Google font collection to add to your site. It even can store fonts in your stor..",
              publishedAt: "2023-01-10T18:29:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9Il-rykH7GI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "7sKbN_y5r0w",
            statistics: {
              viewCount: "53",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M21S",
            },
            snippet: {
              title:
                "How to add Google fonts to Your  Shopify Themes In Minutes",
              description:
                "Change any Google Fonts in a minute, 100% GDPR compliant with AnyFont app",
              publishedAt: "2023-01-06T10:42:42Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/7sKbN_y5r0w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "iw9PiUgA7Io",
            statistics: {
              viewCount: "573",
              likeCount: "7",
              favoriteCount: "0",
            },
            contentDetails: {
              duration: "PT1M42S",
            },
            snippet: {
              title:
                "How to Duplicate a Shopify Store in Minutes with AClone App",
              description:
                "AClone makes it easy to duplicate a Shopify store's content to another one. It will automatically copy your products, product images, collections, pages, blogs, and th..",
              publishedAt: "2022-12-13T20:03:49Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/iw9PiUgA7Io/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "BCzTZmGQIgk",
            statistics: {
              viewCount: "720",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M13S",
            },
            snippet: {
              title: "How to install Shopify themes with AClone app",
              description:
                "Requires:\n- Arena Shopify Admin Extension https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n- https://apps.sho..",
              publishedAt: "2022-12-03T05:32:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BCzTZmGQIgk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kSpZJlNScc0",
            statistics: {
              viewCount: "33",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT53S",
            },
            snippet: {
              title: "How to import data using Arena Copy App",
              description:
                "How to import data using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:34:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kSpZJlNScc0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9w2rJPHCff0",
            statistics: {
              viewCount: "15",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M23S",
            },
            snippet: {
              title: "How to export data with filters using Arena Copy App",
              description:
                "How to export data with filters using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:18:39Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9w2rJPHCff0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_SDZec8X-sY",
            statistics: {
              viewCount: "14",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M",
            },
            snippet: {
              title: "How to export data using Arena Copy App",
              description:
                "How to export data using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:16:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_SDZec8X-sY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "No0Nj36Cx4E",
            statistics: {
              viewCount: "19",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M2S",
            },
            snippet: {
              title:
                "Add a Currency Selector to your online store with Desktop screen",
              description:
                "Add a Currency Selector to your online store with Desktop screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2022-01-13T10:09:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/No0Nj36Cx4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "TVysb7WFhHU",
            statistics: {
              viewCount: "31",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M17S",
            },
            snippet: {
              title:
                "Add a Currency Selector to your online store with Mobile screen",
              description:
                "Add a Currency Selector to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2022-01-13T10:10:55Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/TVysb7WFhHU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kMkeMLybJIg",
            statistics: {
              viewCount: "39",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M25S",
            },
            snippet: {
              title:
                "Add a Language Switcher to your online store with Mobile screen",
              description:
                "Add a Language Switcher to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2021-12-27T08:20:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kMkeMLybJIg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "oxXWUtKYW-s",
            statistics: {
              viewCount: "140",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M",
            },
            snippet: {
              title:
                "Add a Language Switcher to your online store with Desktop screen",
              description:
                "Add a Language Switcher to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2021-12-27T08:18:30Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/oxXWUtKYW-s/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "CbM-kVb9Wdc",
            statistics: {
              viewCount: "451",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M10S",
            },
            snippet: {
              title:
                "How to insert language switcher into Theme header with Native Translate app",
              description:
                "How to insert language switcher into Theme header with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-14T10:18:40Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/CbM-kVb9Wdc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QemFgRoUaHc",
            statistics: {
              viewCount: "50",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT26S",
            },
            snippet: {
              title: "How to use Estimate feature with Native Translate app",
              description:
                "How to use Estimate feature with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-12T05:11:57Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QemFgRoUaHc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "E21IYXj7yZA",
            statistics: {
              viewCount: "595",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT27S",
            },
            snippet: {
              title: "How to add new store language with Native Translate app",
              description:
                "How to add new store language with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-09T04:31:21Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/E21IYXj7yZA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "naVh6TbhqGc",
            statistics: {
              viewCount: "1032",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT6M5S",
            },
            snippet: {
              title:
                "How to  customize the  Verticle mega menu for Chromium Shopify Theme",
              description: "",
              publishedAt: "2021-09-15T10:18:18Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/naVh6TbhqGc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "muhDoMVcKDI",
            statistics: {
              viewCount: "4994",
              likeCount: "19",
              favoriteCount: "0",
              commentCount: "3",
            },
            contentDetails: {
              duration: "PT3M41S",
            },
            snippet: {
              title:
                "How to add a new filter group to Collection sidebar in Shopify Theme",
              description: "",
              publishedAt: "2021-08-10T03:28:44Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/muhDoMVcKDI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_wB5ize57X0",
            statistics: {
              viewCount: "1024",
              likeCount: "3",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT7M14S",
            },
            snippet: {
              title:
                "Create JSON file for applying to online store's collection Filter",
              description: "",
              publishedAt: "2021-07-07T10:25:32Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_wB5ize57X0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "5SaKBu1xD4E",
            statistics: {
              viewCount: "52",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M46S",
            },
            snippet: {
              title: "How to change or hidden Youtube Feed from shop",
              description: "How to change or hidden Youtube Feed from shop",
              publishedAt: "2021-01-16T09:37:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5SaKBu1xD4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "maG_qqUFd2c",
          "4jEk2ryLds4",
          "9Il-rykH7GI",
          "7sKbN_y5r0w",
          "iw9PiUgA7Io",
          "BCzTZmGQIgk",
          "kSpZJlNScc0",
          "9w2rJPHCff0",
          "_SDZec8X-sY",
          "No0Nj36Cx4E",
          "TVysb7WFhHU",
          "kMkeMLybJIg",
          "oxXWUtKYW-s",
          "CbM-kVb9Wdc",
          "QemFgRoUaHc",
          "E21IYXj7yZA",
          "naVh6TbhqGc",
          "muhDoMVcKDI",
          "_wB5ize57X0",
          "5SaKBu1xD4E",
        ],
      },
    },
    enabled: true,
    created_at: 1668148824389,
    updated_at: 1668148824389,
    app_plan: "pro",
  },
  {
    id: "yta-u03zc3vog6-1668148842093",
    name: "Youtube-Feed-1668148842093",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: false,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCG-8TGzkP7XhKKxTj261o1w",
        url: "https://www.youtube.com/channel/UCG-8TGzkP7XhKKxTj261o1w",
        title: "ArenaCommerce",
        titleCustom: "",
        description:
          "A place to buy beautiful Themes for your ecommerce website.",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/ytc/AL5GRJXbBS49AqQ4C4MauiJe5Twhz0n2xjH3JO4aM3BqPw=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/AiIIMHoN8oamPYSo_0t5lhWd3oJnPu80IjEtVU3wNnHksSMXu48SxDECLUu2T7N0d4-NCGTl",
        imageCustom: "",
        statistics: {
          viewCount: 132,
          subscriberCount: 518,
          videoCount: 132,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLsZwfcHiP6N9vuvB45s7TmPoTSbTYeUab",
            snippet: {
              title: "AnyFont",
            },
          },
          {
            id: "PLsZwfcHiP6N9uOJ5UtT741SgiaKi5EMtO",
            snippet: {
              title: "Arena Copy App",
            },
          },
          {
            id: "PLsZwfcHiP6N9MYpcK8PtwqoJj23ZyYjkD",
            snippet: {
              title: "Arena Copy App",
            },
          },
          {
            id: "PLsZwfcHiP6N8flFbYW-zhgEewi0nFq4gs",
            snippet: {
              title: "Native Translate app",
            },
          },
          {
            id: "PLsZwfcHiP6N8baYuQbcuU3y9yTsJ95Xwr",
            snippet: {
              title: "Native Translate",
            },
          },
          {
            id: "PLsZwfcHiP6N8xpgcJiMtRS5LdSu3t3wOw",
            snippet: {
              title: "Shopify Youtube Feed - Arenacommerce",
            },
          },
          {
            id: "PLsZwfcHiP6N-htOdWi2VlaRyn6h4gp_J6",
            snippet: {
              title: "Supply User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N_-a6zBgCezaCF2zVCq4T4E",
            snippet: {
              title: "XStore User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-tZB7qDcRCEofdNoJSyISJ",
            snippet: {
              title: "Electro 5 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-lBfCR4EOmc58LfcXxoch5",
            snippet: {
              title: "Chromium User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N9GjfAUWmsLQL-bLzd32J1S",
            snippet: {
              title: "Zeexo User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N-uNlyuZwWuts3uw_2K6l3K",
            snippet: {
              title: "ArenaCommerce - General",
            },
          },
          {
            id: "PLsZwfcHiP6N8hQgl0vp-6SeGrLamkBLVH",
            snippet: {
              title: "Handy 4 User Guide",
            },
          },
          {
            id: "PLsZwfcHiP6N8QndlmGAO1ax6H_f0LieaB",
            snippet: {
              title: "Shopify Themes",
            },
          },
        ],
        selected: -1,
      },
      youtube_videos: {
        items: [
          {
            id: "maG_qqUFd2c",
            statistics: {
              viewCount: "125",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT5M",
            },
            snippet: {
              title: "Shopify Advanced Custom Fields: Beginner's Guide",
              description:
                "In this video, we'll show you how to use custom fields (also known as metafields) to add extra information to your Shopify store. Custom fields can be used for a varie..",
              publishedAt: "2023-02-27T20:59:54Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/maG_qqUFd2c/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "4jEk2ryLds4",
            statistics: {
              viewCount: "218",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M38S",
            },
            snippet: {
              title: "ACF: Metafields Custom Fields Quick Start",
              description:
                "Turns sites into a fully-fledged content management by giving you all the tools to manage Metafields",
              publishedAt: "2023-01-29T02:29:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/4jEk2ryLds4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9Il-rykH7GI",
            statistics: {
              viewCount: "16",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M27S",
            },
            snippet: {
              title: "Add New Custom Font to your Shopify Themes",
              description:
                "Quickly change the font without the need for CSS knowledge. Or you can select from the Google font collection to add to your site. It even can store fonts in your stor..",
              publishedAt: "2023-01-10T18:29:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9Il-rykH7GI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "7sKbN_y5r0w",
            statistics: {
              viewCount: "53",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT4M21S",
            },
            snippet: {
              title:
                "How to add Google fonts to Your  Shopify Themes In Minutes",
              description:
                "Change any Google Fonts in a minute, 100% GDPR compliant with AnyFont app",
              publishedAt: "2023-01-06T10:42:42Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/7sKbN_y5r0w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "iw9PiUgA7Io",
            statistics: {
              viewCount: "573",
              likeCount: "7",
              favoriteCount: "0",
            },
            contentDetails: {
              duration: "PT1M42S",
            },
            snippet: {
              title:
                "How to Duplicate a Shopify Store in Minutes with AClone App",
              description:
                "AClone makes it easy to duplicate a Shopify store's content to another one. It will automatically copy your products, product images, collections, pages, blogs, and th..",
              publishedAt: "2022-12-13T20:03:49Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/iw9PiUgA7Io/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "BCzTZmGQIgk",
            statistics: {
              viewCount: "720",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT3M13S",
            },
            snippet: {
              title: "How to install Shopify themes with AClone app",
              description:
                "Requires:\n- Arena Shopify Admin Extension https://chrome.google.com/webstore/detail/arena-shopify-admin-exten/acjopnffmehbackaohjjnpnnnocfcmnf?hl=en\n- https://apps.sho..",
              publishedAt: "2022-12-03T05:32:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/BCzTZmGQIgk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kSpZJlNScc0",
            statistics: {
              viewCount: "33",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT53S",
            },
            snippet: {
              title: "How to import data using Arena Copy App",
              description:
                "How to import data using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:34:13Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kSpZJlNScc0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9w2rJPHCff0",
            statistics: {
              viewCount: "15",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M23S",
            },
            snippet: {
              title: "How to export data with filters using Arena Copy App",
              description:
                "How to export data with filters using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:18:39Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9w2rJPHCff0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_SDZec8X-sY",
            statistics: {
              viewCount: "14",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M",
            },
            snippet: {
              title: "How to export data using Arena Copy App",
              description:
                "How to export data using Arena Copy App\n- by ArenaCommerce Team",
              publishedAt: "2022-09-28T04:16:29Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_SDZec8X-sY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "No0Nj36Cx4E",
            statistics: {
              viewCount: "19",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M2S",
            },
            snippet: {
              title:
                "Add a Currency Selector to your online store with Desktop screen",
              description:
                "Add a Currency Selector to your online store with Desktop screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2022-01-13T10:09:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/No0Nj36Cx4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "TVysb7WFhHU",
            statistics: {
              viewCount: "31",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M17S",
            },
            snippet: {
              title:
                "Add a Currency Selector to your online store with Mobile screen",
              description:
                "Add a Currency Selector to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2022-01-13T10:10:55Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/TVysb7WFhHU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kMkeMLybJIg",
            statistics: {
              viewCount: "39",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M25S",
            },
            snippet: {
              title:
                "Add a Language Switcher to your online store with Mobile screen",
              description:
                "Add a Language Switcher to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2021-12-27T08:20:34Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kMkeMLybJIg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "oxXWUtKYW-s",
            statistics: {
              viewCount: "140",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M",
            },
            snippet: {
              title:
                "Add a Language Switcher to your online store with Desktop screen",
              description:
                "Add a Language Switcher to your online store with Mobile screen\n- Native Translate app\n- by ArenaCommerce Team",
              publishedAt: "2021-12-27T08:18:30Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/oxXWUtKYW-s/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "CbM-kVb9Wdc",
            statistics: {
              viewCount: "451",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1M10S",
            },
            snippet: {
              title:
                "How to insert language switcher into Theme header with Native Translate app",
              description:
                "How to insert language switcher into Theme header with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-14T10:18:40Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/CbM-kVb9Wdc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QemFgRoUaHc",
            statistics: {
              viewCount: "50",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT26S",
            },
            snippet: {
              title: "How to use Estimate feature with Native Translate app",
              description:
                "How to use Estimate feature with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-12T05:11:57Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QemFgRoUaHc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "E21IYXj7yZA",
            statistics: {
              viewCount: "595",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT27S",
            },
            snippet: {
              title: "How to add new store language with Native Translate app",
              description:
                "How to add new store language with Native Translate app\n- ArenaCommerce Team",
              publishedAt: "2021-10-09T04:31:21Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/E21IYXj7yZA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "naVh6TbhqGc",
            statistics: {
              viewCount: "1032",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT6M5S",
            },
            snippet: {
              title:
                "How to  customize the  Verticle mega menu for Chromium Shopify Theme",
              description: "",
              publishedAt: "2021-09-15T10:18:18Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/naVh6TbhqGc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "muhDoMVcKDI",
            statistics: {
              viewCount: "4994",
              likeCount: "19",
              favoriteCount: "0",
              commentCount: "3",
            },
            contentDetails: {
              duration: "PT3M41S",
            },
            snippet: {
              title:
                "How to add a new filter group to Collection sidebar in Shopify Theme",
              description: "",
              publishedAt: "2021-08-10T03:28:44Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/muhDoMVcKDI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "_wB5ize57X0",
            statistics: {
              viewCount: "1024",
              likeCount: "3",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT7M14S",
            },
            snippet: {
              title:
                "Create JSON file for applying to online store's collection Filter",
              description: "",
              publishedAt: "2021-07-07T10:25:32Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/_wB5ize57X0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "5SaKBu1xD4E",
            statistics: {
              viewCount: "52",
              likeCount: "0",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT2M46S",
            },
            snippet: {
              title: "How to change or hidden Youtube Feed from shop",
              description: "How to change or hidden Youtube Feed from shop",
              publishedAt: "2021-01-16T09:37:10Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/5SaKBu1xD4E/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "maG_qqUFd2c",
          "4jEk2ryLds4",
          "9Il-rykH7GI",
          "7sKbN_y5r0w",
          "iw9PiUgA7Io",
          "BCzTZmGQIgk",
          "kSpZJlNScc0",
          "9w2rJPHCff0",
          "_SDZec8X-sY",
          "No0Nj36Cx4E",
          "TVysb7WFhHU",
          "kMkeMLybJIg",
          "oxXWUtKYW-s",
          "CbM-kVb9Wdc",
          "QemFgRoUaHc",
          "E21IYXj7yZA",
          "naVh6TbhqGc",
          "muhDoMVcKDI",
          "_wB5ize57X0",
          "5SaKBu1xD4E",
        ],
      },
    },
    enabled: true,
    created_at: 1668148842093,
    updated_at: 1668148842093,
    app_plan: "pro",
  },
  {
    id: "yta-vift3zato7-1677827071062",
    name: "Youtube-Feed-YOYO-Music",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: false,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {
            label: "Default",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#fafafa",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#171717",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#171717",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#484848",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#171717",
                },
                video_date: {
                  label: "Video Date",
                  value: "#484848",
                },
                video_description: {
                  label: "Video Description",
                  value: "#171717",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#484848",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#ffffff",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 0,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UC0AMN_aNRWReYumuM-UtIRQ",
        url: "https://www.youtube.com/channel/UC0AMN_aNRWReYumuM-UtIRQ",
        title: "YOYO Music",
        titleCustom: "",
        description:
          "This is Hong An Entertainment official Youtube channel.\nAll the new works shall be published and updated on the weekly basis. Pls.contact banquyen.hongan@gmail.com or banquyen@hamedia.vn on copyright matter. All copyright infringement is strictly prohibited.\n",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/8q1rLyMyjTajgZVNevsAoj6YJmqe0LK59u_hTuh8mdrc4kkyuIUm_eHE5J8fDshkr7t1GQT4JA=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/kHBwn1OazFbmDX82lZi07uRs0inS9nYkggqbd27SW2c0yhpcOKua13idVy1Q79F5KbdCzb3IDg",
        imageCustom: "",
        statistics: {
          viewCount: 270,
          subscriberCount: 44800,
          videoCount: 270,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLlaCuQegEeFmCoo0ScRpiAxkBfokXFFeh",
            snippet: {
              title: "Những Ca Khúc Indie Hay Nhất",
            },
          },
          {
            id: "PLlaCuQegEeFm4q9QehpEd_IgSD0bpj436",
            snippet: {
              title: "YOYO Music",
            },
          },
        ],
        selected: -1,
      },
      youtube_videos: {
        items: [
          {
            id: "FR8MLdqP1OQ",
            statistics: {
              viewCount: "424",
              likeCount: "1",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H31M7S",
            },
            snippet: {
              title:
                "Mascara, Vì Anh Đâu Có Biết, Lạ Lùng - Những Ca Khúc Hay Nhất Của Chillies, Madihu, Vũ.,...",
              description:
                "Mascara, Vì Anh Đâu Có Biết, Lạ Lùng - Những Ca Khúc Hay Nhất Của Chillies, Madihu, Vũ.,...\nMascara, Vì Anh Đâu Có Biết, Lạ Lùng - Những Ca Khúc Hay Nhất Của Chillies,..",
              publishedAt: "2023-03-13T01:00:05Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/FR8MLdqP1OQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "z0-kR42PEl0",
            statistics: {
              viewCount: "2486",
              likeCount: "10",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H26M3S",
            },
            snippet: {
              title:
                "Bước Qua Nhau, Lạ Lùng, Đã Lỡ Yêu Em Nhiều - Những Ca Khúc Hay Nhất Của Vũ., Justatee...",
              description:
                "Bước Qua Nhau, Lạ Lùng, Đã Lỡ Yêu Em Nhiều - Những Ca Khúc Hay Nhất Của Vũ., Justatee...\nBước Qua Nhau, Lạ Lùng, Đã Lỡ Yêu Em Nhiều - Những Ca Khúc Hay Nhất Của Vũ., J..",
              publishedAt: "2023-03-12T01:00:31Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/z0-kR42PEl0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "JsqNYCBL37o",
            statistics: {
              viewCount: "4112",
              likeCount: "18",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H31M53S",
            },
            snippet: {
              title:
                "Thằng Điên, Đã Lỡ Yêu Em Nhiều, Có Em Đời Bỗng Vui- Những Ca Khúc Hay Nhất Của Justatee, Chillies...",
              description:
                "Thằng Điên, Đã Lỡ Yêu Em Nhiều, Có Em Đời Bỗng Vui- Những Ca Khúc Hay Nhất Của Justatee, Chillies...\nThằng Điên, Đã Lỡ Yêu Em Nhiều, Có Em Đời Bỗng Vui- Những Ca Khúc ..",
              publishedAt: "2023-03-12T01:00:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/JsqNYCBL37o/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "NWK0WCJC6-Q",
            statistics: {
              viewCount: "4563",
              likeCount: "16",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H31M34S",
            },
            snippet: {
              title:
                "Suýt Nữa Thì, Chiều Hôm Ấy, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Andiez, Jaykii,...",
              description:
                "Suýt Nữa Thì, Chiều Hôm Ấy, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Andiez, Jaykii,...\nSuýt Nữa Thì, Chiều Hôm Ấy, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-11T01:00:08Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/NWK0WCJC6-Q/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "hFWdsEZFynY",
            statistics: {
              viewCount: "7783",
              likeCount: "24",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H28M21S",
            },
            snippet: {
              title:
                "Tháng Năm, Tâm Sự Tuổi 30, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Soobin Hoàng Sơn, Jaykii...",
              description:
                "Tháng Năm, Tâm Sự Tuổi 30, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Soobin Hoàng Sơn, Jaykii...\nTháng Năm, Tâm Sự Tuổi 30, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của S..",
              publishedAt: "2023-03-10T01:00:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/hFWdsEZFynY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "p4NkaNv_p7w",
            statistics: {
              viewCount: "3990",
              likeCount: "18",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H32M58S",
            },
            snippet: {
              title:
                "Vì Anh Đâu Có Biết, Và Thế Là Hết, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Chillies...",
              description:
                "Vì Anh Đâu Có Biết, Và Thế Là Hết, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Chillies...\nVì Anh Đâu Có Biết, Và Thế Là Hết, Bước Qua Nhau - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-09T01:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/p4NkaNv_p7w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "Jytbux4s_kA",
            statistics: {
              viewCount: "2204",
              likeCount: "7",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H25M16S",
            },
            snippet: {
              title:
                "Phía Sau Một Cô Gái, Xin Đừng Lặng Im, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...",
              description:
                "Phía Sau Một Cô Gái, Xin Đừng Lặng Im, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...\nPhía Sau Một Cô Gái, Xin Đừng Lặng Im, Bước Qua Nhau - Những Ca Khúc ..",
              publishedAt: "2023-03-09T01:00:12Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Jytbux4s_kA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "0GINKYam2q4",
            statistics: {
              viewCount: "2328",
              likeCount: "10",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H26M9S",
            },
            snippet: {
              title:
                "Đi Để Trở Về 1, Vì Anh Đâu Có Biết, Bắt Cóc Con Tim - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...",
              description:
                "Đi Để Trở Về 1, Vì Anh Đâu Có Biết, Bắt Cóc Con Tim - Những Ca Khúc Hay Nhất Của Soobin, Vũ.,...\nĐi Để Trở Về 1, Vì Anh Đâu Có Biết, Bắt Cóc Con Tim - Những Ca Khúc Ha..",
              publishedAt: "2023-03-08T01:00:00Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/0GINKYam2q4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "KK3BHH9rJ7Q",
            statistics: {
              viewCount: "1998",
              likeCount: "5",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H28M57S",
            },
            snippet: {
              title:
                "Đông Kiếm Em, 2AM, Phút Ban Đầu, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Justatee,...",
              description:
                "Đông Kiếm Em, 2AM, Phút Ban Đầu, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Justatee,...\nĐông Kiếm Em, 2AM, Phút Ban Đầu, Bước Qua Nhau - Những Ca Khúc Hay Nhất C..",
              publishedAt: "2023-03-07T01:15:02Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/KK3BHH9rJ7Q/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "kroP32Khz58",
            statistics: {
              viewCount: "5295",
              likeCount: "14",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H23M12S",
            },
            snippet: {
              title:
                "Lạ Lùng, Và Thế Là Hết, Sao Em Nỡ, Có Em Đời Bỗng Vui - Những Ca Khúc Hay Nhất Của Vũ., Chillies,...",
              description:
                "Lạ Lùng, Và Thế Là Hết, Sao Em Nỡ, Có Em Đời Bỗng Vui - Những Ca Khúc Hay Nhất Của Vũ., Chillies,...\nLạ Lùng, Và Thế Là Hết, Sao Em Nỡ, Có Em Đời Bỗng Vui - Những Ca K..",
              publishedAt: "2023-03-07T01:00:26Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/kroP32Khz58/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "c38DAepI9vA",
            statistics: {
              viewCount: "6628",
              likeCount: "15",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H32M24S",
            },
            snippet: {
              title:
                "Bước Qua Mùa Cô Đơn, Bước Qua Nhau, Sao Em Nỡ - Những Ca Khúc Hay Nhất Của Vũ., Jaykii...",
              description:
                "Bước Qua Mùa Cô Đơn, Bước Qua Nhau, Sao Em Nỡ - Những Ca Khúc Hay Nhất Của Vũ., Jaykii...\nBước Qua Mùa Cô Đơn, Bước Qua Nhau, Sao Em Nỡ - Những Ca Khúc Hay Nhất Của Vũ..",
              publishedAt: "2023-03-06T01:00:21Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/c38DAepI9vA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "vZWMaVGvIvk",
            statistics: {
              viewCount: "9740",
              likeCount: "25",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H32M20S",
            },
            snippet: {
              title:
                "Phút Ban Đầu, Phía Sau Một Cô Gái, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Soobin...",
              description:
                "Phút Ban Đầu, Phía Sau Một Cô Gái, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Vũ., Soobin...\nPhút Ban Đầu, Phía Sau Một Cô Gái, Bước Qua Nhau - Những Ca Khúc Hay Nhất ..",
              publishedAt: "2023-03-05T01:00:31Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/vZWMaVGvIvk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "C_W7WIOkTSw",
            statistics: {
              viewCount: "9495",
              likeCount: "27",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT1H37M23S",
            },
            snippet: {
              title:
                "Lời Xin Lỗi Vụng Về, Sai Người Sai Thời Điểm - Những Ca Khúc Hay Nhất Của Quân A.P, Thanh Hưng,...",
              description:
                "Lời Xin Lỗi Vụng Về, Sai Người Sai Thời Điểm - Những Ca Khúc Hay Nhất Của Quân A.P, Thanh Hưng,...\nLời Xin Lỗi Vụng Về, Sai Người Sai Thời Điểm - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-04T01:00:06Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/C_W7WIOkTSw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "299m5VLdHmc",
            statistics: {
              viewCount: "2026",
              likeCount: "7",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H29M58S",
            },
            snippet: {
              title:
                "Có Em Đời Bỗng Vui, Bước Qua Nhau, Và Thế Là Hết - Những Ca Khúc Hay Nhất Của Vũ., Chillies...",
              description:
                "Có Em Đời Bỗng Vui, Bước Qua Nhau, Và Thế Là Hết - Những Ca Khúc Hay Nhất Của Vũ., Chillies...\nCó Em Đời Bỗng Vui, Bước Qua Nhau, Và Thế Là Hết - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-03-03T01:15:00Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/299m5VLdHmc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "k5fpRotgL-A",
            statistics: {
              viewCount: "10970",
              likeCount: "38",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H32M59S",
            },
            snippet: {
              title:
                "Bước Qua Mùa Cô Đơn, Và Thế Là Hết, Đừng Như Thói Quen - Những Ca Khúc Hay Nhất Của Vũ., Chillies...",
              description:
                "Bước Qua Mùa Cô Đơn, Và Thế Là Hết, Đừng Như Thói Quen - Những Ca Khúc Hay Nhất Của Vũ., Chillies...\nBước Qua Mùa Cô Đơn, Và Thế Là Hết, Đừng Như Thói Quen - Những Ca ..",
              publishedAt: "2023-03-02T01:15:02Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/k5fpRotgL-A/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "9ETyokar2tQ",
            statistics: {
              viewCount: "2099",
              likeCount: "9",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H33M43S",
            },
            snippet: {
              title:
                "Và Thế Là Hết, Lạ Lùng, Phía Sau Một Cô Gái - Những Ca Khúc Hay Nhất Của Chillies, Vũ., Soobin...",
              description:
                "Và Thế Là Hết, Lạ Lùng, Phía Sau Một Cô Gái - Những Ca Khúc Hay Nhất Của Chillies, Vũ., Soobin...\nVà Thế Là Hết, Lạ Lùng, Phía Sau Một Cô Gái - Những Ca Khúc Hay Nhất ..",
              publishedAt: "2023-03-02T01:00:03Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/9ETyokar2tQ/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "UaGypCRMX9U",
            statistics: {
              viewCount: "24956",
              likeCount: "72",
              favoriteCount: "0",
              commentCount: "8",
            },
            contentDetails: {
              duration: "PT1H34M39S",
            },
            snippet: {
              title:
                "Xin Đừng Lặng Im, Chiều Hôm Ấy, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Jaykii, Vũ.,...",
              description:
                "Xin Đừng Lặng Im, Chiều Hôm Ấy, Bước Qua Nhau - Những Ca Khúc Hay Nhất Của Soobin, Jaykii, Vũ.,...\nXin Đừng Lặng Im, Chiều Hôm Ấy, Bước Qua Nhau - Những Ca Khúc Hay Nh..",
              publishedAt: "2023-03-01T01:15:03Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/UaGypCRMX9U/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "Z7p9EiZ6z2w",
            statistics: {
              viewCount: "3100",
              likeCount: "11",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H24M43S",
            },
            snippet: {
              title:
                "Vì Anh Đâu Có Biết, Đường Tôi Chở Em Về - Những Ca Khúc Hay Nhất Của Madihu, Vũ.,...",
              description:
                "Vì Anh Đâu Có Biết, Đường Tôi Chở Em Về - Những Ca Khúc Hay Nhất Của Madihu, Vũ.,...\nVì Anh Đâu Có Biết, Đường Tôi Chở Em Về - Những Ca Khúc Hay Nhất Của Madihu, Vũ.,...",
              publishedAt: "2023-03-01T01:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/Z7p9EiZ6z2w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "MTozpNBDFC4",
            statistics: {
              viewCount: "895",
              likeCount: "4",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H34M21S",
            },
            snippet: {
              title:
                "Sài Gòn Đau Lòng Quá,Bước Qua Mùa Cô Đơn- Những Ca Khúc Hay Nhất Của Hứa Kim Tuyền, Vũ.,...",
              description:
                "Sài Gòn Đau Lòng Quá, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Hứa Kim Tuyền, Vũ.,...\nSài Gòn Đau Lòng Quá, Bước Qua Mùa Cô Đơn - Những Ca Khúc Hay Nhất Của Hứ..",
              publishedAt: "2023-02-28T01:00:16Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/MTozpNBDFC4/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "O74P5rve0VI",
            statistics: {
              viewCount: "10398",
              likeCount: "40",
              favoriteCount: "0",
              commentCount: "0",
            },
            contentDetails: {
              duration: "PT1H32M30S",
            },
            snippet: {
              title:
                "Tâm Sự Tuổi 30, Suýt Nữa Thì, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Trịnh Thăng Bình, Andiez,...",
              description:
                "Tâm Sự Tuổi 30, Suýt Nữa Thì, Chiều Hôm Ấy - Những Ca Khúc Hay Nhất Của Trịnh Thăng Bình, Andiez,...\nTâm Sự Tuổi 30, Suýt Nữa Thì, Chiều Hôm Ấy - Những Ca Khúc Hay Nhấ..",
              publishedAt: "2023-02-27T01:00:14Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/O74P5rve0VI/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "FR8MLdqP1OQ",
          "z0-kR42PEl0",
          "JsqNYCBL37o",
          "NWK0WCJC6-Q",
          "hFWdsEZFynY",
          "p4NkaNv_p7w",
          "Jytbux4s_kA",
          "0GINKYam2q4",
          "KK3BHH9rJ7Q",
          "kroP32Khz58",
          "c38DAepI9vA",
          "vZWMaVGvIvk",
          "C_W7WIOkTSw",
          "299m5VLdHmc",
          "k5fpRotgL-A",
          "9ETyokar2tQ",
          "UaGypCRMX9U",
          "Z7p9EiZ6z2w",
          "MTozpNBDFC4",
          "O74P5rve0VI",
        ],
      },
    },
    enabled: true,
    created_at: 1677827071062,
    updated_at: 1677827071062,
    app_plan: "pro",
  },
  {
    id: "yta-ibz6v8j1ssk-1678415030138",
    name: "Youtube-Feed-1678415030138",
    setting: {
      id: "settings-1",
      label: "Youtube Channel",
      banner: "youtube_channel",
      type: {
        items: ["Youtube channel url", "Video id(s)"],
        selected: 0,
      },
      showComments: false,
      layout: {
        header: {
          show: true,
          layout: {
            data: ["Classic", "Accent", "Minimal"],
            selected: 0,
          },
          elements: {
            logo: {
              label: "Logo",
              show: true,
            },
            banner: {
              label: "Banner",
              show: false,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            channel_description: {
              label: "Channel description",
              show: true,
            },
            videos_counter: {
              label: "Videos counter",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            subscribers_counter: {
              label: "Subscribers counter",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
          },
        },
        columns_rows: {
          columns: 4,
          rows: 1,
          space_between_videos: 20,
        },
        video: {
          layout: {
            data: ["Classic", "Horizontal", "Cinema"],
            selected: 0,
          },
          elements: {
            play_icon: {
              label: "Play icon",
              show: true,
            },
            duration: {
              label: "Duration",
              show: true,
            },
            title: {
              label: "Title",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
          },
          mode: {
            data: ["Popup", "Play", "Open Youtube"],
            selected: 0,
          },
          play_icon_custom: {
            value: "",
          },
          thumbnailHeight: 200,
          thumbnailWidth: 300,
        },
        popup: {
          elements: {
            title: {
              label: "Title",
              show: true,
            },
            channel_logo: {
              label: "Channel logo",
              show: true,
            },
            channel_name: {
              label: "Channel name",
              show: true,
            },
            subcribe_button: {
              label: "Subcribe button",
              show: true,
            },
            views_counter: {
              label: "Views counter",
              show: true,
            },
            likes_counter: {
              label: "Likes counter",
              show: true,
            },
            dislikes_counter: {
              label: "Dislikes counter",
              show: true,
            },
            comments_counter: {
              label: "Comments counter",
              show: true,
            },
            share_button: {
              label: "Share button",
              show: true,
            },
            date: {
              label: "Date",
              show: true,
            },
            description: {
              label: "Description",
              show: true,
            },
            description_more_button: {
              label: "Description more button",
              show: true,
            },
          },
          auto_play: true,
          z_index: 9999,
        },
        slider_settings: {
          elements: {
            show_navigation_arrows: {
              label: "Show navigation arrows",
              show: true,
            },
          },
          direction: {
            data: ["Horizontal", "Vertical"],
            selected: 0,
          },
          slide_auto_play: true,
          silde_switch_speed: 1000,
          mobile_responsive: {
            extra_small: {
              min_width: 375,
              value: 1,
            },
            small: {
              min_width: 576,
              value: 2,
            },
            medium: {
              min_width: 768,
              value: 2,
            },
            large: {
              min_width: 992,
              value: 3,
            },
            extra_large: {
              min_width: 1200,
              value: 4,
            },
          },
          mobile_responsive_edge_padding: {
            enabled: false,
            value: 50,
          },
          video_count: 20,
        },
        margin: {
          vertical_margin: 0,
          horizontal_margin: 0,
        },
      },
      colors: {
        items: [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {
            label: "Mountain Moments",
            items: {
              header: {
                backgroundTransparent: false,
                background: {
                  label: "Header Background",
                  value: "#1e646e",
                },
                channel_name: {
                  label: "Header Channel name",
                  value: "#ffffff",
                },
                channel_description: {
                  label: "Header Channel description",
                  value: "#fafafa",
                },
                header_counters: {
                  label: "Header Counters",
                  value: "#b2a59f",
                },
              },
              video: {
                video_duration_color: {
                  label: "Video Duration color",
                  value: "#ffffff",
                },
                video_duration_background: {
                  label: "Video Duration background",
                  value: "#4B4B4B",
                },
                video_title: {
                  label: "Video Title",
                  value: "#ffffff",
                },
                video_date: {
                  label: "Video Date",
                  value: "#b2a59f",
                },
                video_description: {
                  label: "Video Description",
                  value: "#ebebeb",
                },
                video_counters: {
                  label: "Video Counters",
                  value: "#b2a59f",
                },
              },
              slider: {
                backgroundTransparent: false,
                background: {
                  label: "Slider Background",
                  value: "#002c2f",
                },
              },
            },
          },
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        selected: 7,
      },
    },
    youtube_channel: {
      youtube_channel: {
        id: "UCdaEEn2pOQpwbOuUZn95eGw",
        url: "https://www.youtube.com/channel/UCdaEEn2pOQpwbOuUZn95eGw",
        title: "Acoustic Soft Rock",
        titleCustom: "",
        description:
          "Hello Everyone !\n- Thanks for visiting my channel. I collect legendary songs here.\n- Wish you happy listening music ❤ ❤ ❤\n",
        descriptionCustom: "",
        thumbnail:
          "https://yt3.ggpht.com/BjXP1xO0Gpa96RLjwQGJcgsJXzBvUYE1zmBN5oxbFLGSXfdkkyIvpBhLD612OlUOAmytt1SJ=s800-c-k-c0x00ffffff-no-rj",
        thumbnailCustom: "",
        image:
          "https://yt3.googleusercontent.com/X-BB3O60URMo01vUmFJoSDBpPn3tW6_lzcmtX8OIHQJ_Cd4GBaYBhgbbA3MsYHhLe1p2tnD3KA",
        imageCustom: "",
        statistics: {
          viewCount: 261,
          subscriberCount: 39000,
          videoCount: 261,
        },
      },
      youtube_playlists: {
        items: [
          {
            id: "PLa93e306PHEGJ7ykuCsczc7TEyRYyoU2U",
            snippet: {
              title:
                "New Slow Songs 2023 | Best Acoustic Slow Songs 2023 ~ Slow Love Songs Playlist",
            },
          },
          {
            id: "PLa93e306PHEGCg3RAsCFGnQeQShyatR6s",
            snippet: {
              title:
                "New Acoustic Songs 2022 | Music Playlist 2022 | Latest Songs 2022",
            },
          },
          {
            id: "PLa93e306PHEHNb_VcHgLHB_h7Y-mdSdlv",
            snippet: {
              title:
                "Acoustic Rock Collection | Best Acoustic Rock Ballads Songs 80s 90s",
            },
          },
          {
            id: "PLa93e306PHEGi0RQLgfFq5eBYTx1Qqq1t",
            snippet: {
              title: "Slow Rock Playlist | Best Slow Rock Songs Of 80s 90s",
            },
          },
        ],
        selected: 2,
      },
      youtube_videos: {
        items: [
          {
            id: "QkPBVnuz0To",
            statistics: {
              viewCount: "470009",
              likeCount: "3799",
              favoriteCount: "0",
              commentCount: "58",
            },
            contentDetails: {
              duration: "PT1H18M50S",
            },
            snippet: {
              title: "Acoustic Rock Collection 🧡 Best Rock Songs Of All Time",
              description:
                "Acoustic Rock Collection 🧡 Best Rock Songs Of All Time\nhttps://www.youtube.com/watch?v=CMrHOeX6X6k\nAcoustic Tiktok Songs 2022 | Tiktok Mashup 2022 Playlist ~ Trending..",
              publishedAt: "2022-04-27T00:49:27Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QkPBVnuz0To/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "HamZ_BlIqrw",
            statistics: {
              viewCount: "2249",
              likeCount: "37",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT1H30M19S",
            },
            snippet: {
              title:
                "Acoustic Rock Collection | Best Acoustic Rock Ballads Songs 80s 90s",
              description:
                "Acoustic Rock Collection | Best Acoustic Rock Ballads Songs 80s 90s\nAcoustic Rock Collection | Best Acoustic Rock Ballads Songs 80s 90s\nAcoustic Rock Collection | Best..",
              publishedAt: "2022-04-21T01:00:02Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/HamZ_BlIqrw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "wmaDuQVWOBc",
            statistics: {
              viewCount: "5274",
              likeCount: "52",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H24M3S",
            },
            snippet: {
              title:
                "Acoustic Rock Ballads Playlist | Best Rock Ballads Songs Of 80s 90s",
              description:
                "Acoustic Rock Ballads Playlist | Best Rock Ballads Songs Of 80s 90s\nAcoustic Rock Ballads Playlist | Best Rock Ballads Songs Of 80s 90s\nAcoustic Rock Ballads Playlist ..",
              publishedAt: "2022-04-19T01:00:15Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/wmaDuQVWOBc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "QkPBVnuz0To",
            statistics: {
              viewCount: "470009",
              likeCount: "3799",
              favoriteCount: "0",
              commentCount: "58",
            },
            contentDetails: {
              duration: "PT1H18M50S",
            },
            snippet: {
              title: "Acoustic Rock Collection 🧡 Best Rock Songs Of All Time",
              description:
                "Acoustic Rock Collection 🧡 Best Rock Songs Of All Time\nhttps://www.youtube.com/watch?v=CMrHOeX6X6k\nAcoustic Tiktok Songs 2022 | Tiktok Mashup 2022 Playlist ~ Trending..",
              publishedAt: "2022-04-27T00:49:27Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/QkPBVnuz0To/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "c05I4lfFjDs",
            statistics: {
              viewCount: "2113",
              likeCount: "28",
              favoriteCount: "0",
              commentCount: "2",
            },
            contentDetails: {
              duration: "PT1H21M40S",
            },
            snippet: {
              title:
                "Acoustic Rock Ballads 🧡 Best Rock Ballads Songs Of 80s 90s",
              description:
                "Acoustic Rock Ballads 🧡 Best Rock Ballads Songs Of 80s 90s\nAcoustic Rock Ballads 🧡 Best Rock Ballads Songs Of 80s 90s\nAcoustic Rock Ballads 🧡 Best Rock Ballads Song..",
              publishedAt: "2022-04-16T01:30:05Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/c05I4lfFjDs/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
          {
            id: "EkYOhyg4DNY",
            statistics: {
              viewCount: "1432",
              likeCount: "12",
              favoriteCount: "0",
              commentCount: "1",
            },
            contentDetails: {
              duration: "PT1H37M23S",
            },
            snippet: {
              title: "Slow Rock Playlist | Best Slow Rock Songs Of 80s 90s",
              description:
                "Slow Rock Playlist | Best Slow Rock Songs Of 80s 90s\nSlow Rock Playlist | Best Slow Rock Songs Of 80s 90s\nSlow Rock Playlist | Best Slow Rock Songs Of 80s 90s\n#slowroc..",
              publishedAt: "2022-04-15T01:00:03Z",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/EkYOhyg4DNY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ],
        ids: [
          "QkPBVnuz0To",
          "HamZ_BlIqrw",
          "wmaDuQVWOBc",
          "QkPBVnuz0To",
          "c05I4lfFjDs",
          "EkYOhyg4DNY",
        ],
      },
    },
    enabled: true,
    created_at: 1678415030138,
    updated_at: 1678415030138,
    app_plan: "pro",
  },
];

console.log("window.theme.yta_widgets :>> ", window.theme.yta_widgets);
