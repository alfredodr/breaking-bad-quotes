import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { Badge } from "@mui/material";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

const Navigation = ({ quoteInfo, showRecentsQuotes, showFavoritesQuotes, showArchivesQuotes, clearData }) => {
    const [value, setValue] = useState(0);
    const recentCount = quoteInfo.length;
    const favoriteCount = quoteInfo.filter(item => item.isFavorite === true);
    const archiveCount = quoteInfo.filter(item => item.isArchive === true);
    const userAction = [
        { icon: <Badge badgeContent={recentCount} color="secondary"><RestoreIcon /></Badge>, name: "Recent", label: "Recents" },
        { icon: <Badge badgeContent={favoriteCount.length} color="secondary"><FavoriteIcon /></Badge>, name: "Favorite", label: "Favorite" },
        { icon: <Badge badgeContent={archiveCount.length} color="secondary"><ArchiveIcon /></Badge>, name: "Archive", label: "Archive" },
        { icon: <ClearAllIcon />, name: "Clear", label: "Clear All" }
    ];

    const showBottomNavigation = () => {
        return (
            <Box sx={{ pb: 7 }} mt={5}  >
                <Paper>
                    <BottomNavigation
                        className="bottom-navigation-container"
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {userAction.map((action) => (
                            <BottomNavigationAction
                                key={action.name}
                                icon={action.icon}
                                label={action.label}
                                onClick={() => {
                                    handleClickBotttomNav(action.name)
                                }}
                            />
                        ))}
                    </BottomNavigation>
                </Paper>
            </Box>
        );
    };

    const handleClickBotttomNav = (operationNav) => {
        if (operationNav === "Recent") {
            showRecentsQuotes();
        } else if (operationNav === "Favorite") {
            showFavoritesQuotes();
        } else if (operationNav === "Archive") {
            showArchivesQuotes();
        } else if (operationNav === "Clear") {
            clearData();
        }
    };


    return (
        <Box component="div">{quoteInfo.length !== 0 ? showBottomNavigation() : null}</Box>
    )
}
export default Navigation;